import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

// const formatDatetime = (value) => {
//   if (value) {
//     return value.replace(/:\d{2}\.\d{3}\w/, '')
//   }
// }

const NodeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.node?.id)
  }

  return (
    <div className="mx-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          nameClassName="rw-form-error-name"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="block text-stone-700 text-sm font-extralight"
          errorClassName=""
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.node?.name}
          className="block my-2 bg-transparent border-b border-stone-700 w-full"
          errorClassName=""
          validation={{ required: true }}
        />

        <FieldError name="name" className="" />

        <Label
          name="content"
          className="block text-stone-700 text-sm font-extralight"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>
        <TextAreaField
          name="content"
          defaultValue={props.node?.content}
          className="block bg-transparent mt-2 mb-4 w-full"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="content" className="" />

        <div className="absolute top-0 right-0">
          <Submit
            disabled={props.loading}
            className="text-lg py-2 px-4 font-bold rounded-lg uppercase"
          >
            Post
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NodeForm
