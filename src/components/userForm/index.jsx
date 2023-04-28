import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function UserForm({ formType, setIsLoading }) {
  return (
    <>
      {formType ? (
        <LoginForm setIsLoading={setIsLoading} />
      ) : (
        <SignupForm setIsLoading={setIsLoading} />
      )}
    </>
  );
}

export default UserForm;
