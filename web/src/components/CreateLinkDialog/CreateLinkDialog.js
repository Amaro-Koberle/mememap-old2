import { Dialog } from '@headlessui/react'
import { MdArrowRightAlt, MdOutlineCancel } from 'react-icons/md'

const CreateLinkDialog = ({ dialogIsOpen, setDialogIsOpen }) => {
  return (
    <Dialog
      open={dialogIsOpen}
      onClose={() => setDialogIsOpen(false)}
      className="fixed top-0 right-0 bottom-0 left-0 z-10"
    >
      <div className="fixed translate-x-1/2 translate-y-1/2 bg-stone-200 rounded-3xl p-4">
        <Dialog.Title className="text-lg">Create link</Dialog.Title>
        <Dialog.Description>
          This will create a link from this node to itself or to another node.
        </Dialog.Description>

        <nav className="mt-2 flex-col space-y-2">
          <button
            className="border border-stone-800 w-full p-3 rounded-xl flex items-center space-x-3"
            type="button"
          >
            <MdArrowRightAlt className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="font-bold">Looping</span>
              <span className="text-sm ">Link from this node to itself</span>
            </div>
          </button>
          <button
            className="border border-stone-800 w-full p-3 rounded-xl flex items-center space-x-3"
            type="button"
          >
            <MdArrowRightAlt className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="font-bold">Outgoing</span>
              <span className="text-sm ">Link from this node to another</span>
            </div>
          </button>
          <button
            className="border border-stone-800 w-full p-3 rounded-xl flex items-center space-x-3"
            type="button"
          >
            <MdArrowRightAlt className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="font-bold">Incoming</span>
              <span className="text-sm ">
                Link from another node to this one
              </span>
            </div>
          </button>
          <button
            className="border border-stone-800 w-full p-6 rounded-xl flex items-center space-x-3"
            type="button"
            onClick={() => setDialogIsOpen(false)}
          >
            <MdOutlineCancel className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="font-bold">Cancel</span>
            </div>
          </button>
        </nav>
      </div>
      <Dialog.Overlay className="-z-10 w-full fixed h-full bg-stone-200 opacity-70" />
    </Dialog>
  )
}

export default CreateLinkDialog
