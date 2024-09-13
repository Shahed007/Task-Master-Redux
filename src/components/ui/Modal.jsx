import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const Modal = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <>
      <Dialog
        transition
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-[520px] space-y-4 border bg-white rounded-md p-5">
            <DialogTitle className="font-bold">{title}</DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
