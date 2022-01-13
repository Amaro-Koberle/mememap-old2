import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const NodeLinkForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.nodeLink?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.nodeLink?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="sourceNodeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source node id
        </Label>
        <TextField
          name="sourceNodeId"
          defaultValue={props.nodeLink?.sourceNodeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="sourceNodeId" className="rw-field-error" />

        <Label
          name="targetNodeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Target node id
        </Label>
        <TextField
          name="targetNodeId"
          defaultValue={props.nodeLink?.targetNodeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="targetNodeId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NodeLinkForm
