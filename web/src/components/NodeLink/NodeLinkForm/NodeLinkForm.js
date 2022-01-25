import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const NodeLinkForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.nodeLink?.id)
  }

  return (
    <div className="px-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="block text-stone-600 text-sm"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.nodeLink?.name}
          className="block bg-stone-200 py-2 px-4 mb-2 rounded-lg border border-stone-600 w-full"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <div className="absolute top-0 right-0">
          <Submit
            disabled={props.loading}
            className="text-lg py-2 px-4 font-bold rounded-lg uppercase"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NodeLinkForm
