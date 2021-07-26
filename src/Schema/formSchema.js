import * as yup from 'yup'
// import { boolean } from 'yup/lib/locale'

export default yup.object().shape({
    nickname: yup
        .string()
        .required("Plant name is required")
        .min(2, "name must be at least 2 characters"),
    species: yup
        .string()
        .required("Species is required")
        .min(2, "name must be at least 2 characters"),
    h2ofrequency: yup
        .string()
        .oneOf(['daily', 'weekly', 'monthly'], 'h2o Frequency is required'),
    image: yup
        .string()
        .required("Imgage must be in URL format"),

})