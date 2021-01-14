import * as yup from "yup";

const numberPattern = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g;
const schema = yup.object().shape({
  name: yup.string().required(),
  cnpj: yup.string().matches(numberPattern).required(),
  email: yup.string().email().required(),
});

export default schema;
