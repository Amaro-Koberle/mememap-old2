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

const NodeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.node?.id)
  }

  return (
    <div className="p-4">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          nameClassName="rw-form-error-name"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="block text-stone-600 text-sm"
          errorClassName=""
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.node?.name}
          className="block bg-stone-200 py-2 px-4 mb-2 rounded-lg border border-stone-600 w-full"
          errorClassName=""
          validation={{ required: true }}
        />

        <FieldError name="name" className="" />

        <Label
          name="content"
          className="block text-stone-600 text-sm"
          errorClassName="rw-label rw-label-error"
        >
          Content
        </Label>
        <TextField
          name="content"
          defaultValue={props.node?.content}
          className="block bg-stone-200 py-2 px-4 mb-2 rounded-lg border border-stone-600 w-full"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="content" className="" />

        <div className="">
          <Submit
            disabled={props.loading}
            className="py-2 px-4 m-2 rounded-lg uppercase"
          >
            Post
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NodeForm
