export const useForm = (onSubmit, initialData, validateData) => {
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChangeFormData = (fieldName) => {
    return (e) => setFormData({
      ...formData,
      [fieldName]: e.target.value
    });
  };

  const handleSubmitData = async (event) => {
    event.preventDefault();

    const errors = validateData();

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    try {
      setSubmitMessage('');
      setIsLoading(true);

      const response = await onSubmit(formData);

      setSubmitMessage(response?.message);

      setSubmitMessage(response.message);
      if (!response.success) {
        throw new Error(response.message)
      }
      setSuccess(true);
    } catch (error) {
      setSubmitMessage(error.message);
      setSuccess(false);
    } finally {
      setFormError({});
      setIsLoading(false);
    }
  }

  return {
    formData,
    formError,
    isLoading,
    success,
    submitMessage,
    handleSubmitData,
    handleChangeFormData,
  }
}