export const isPublicKeyMissingError = ({ vapiError }) => {
  return (
    vapiError &&
    vapiError.error &&
    vapiError.error.statusCode === 403 &&
    vapiError.error.message === "Forbidden"
  );
};
