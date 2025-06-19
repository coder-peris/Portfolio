type MessageForm = {
  fullName: string,
  email: string,
  message: string,
};

type FormErrors = {
  nameField: string | null;
  emailField: string | null;
  messageField: string | null;
};

type skill = {
  name: string,
  icon: JSX.Element,
};

type Project = {
  title: string,
  description: string,
  sourceCode: string,
  demo: string | null,
  technologies: string,
  image: string,
};