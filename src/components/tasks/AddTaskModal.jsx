import Modal from "../ui/Modal";

const AddTaskModal = ({isOpen, setIsOpen}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming Hero"}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        laboriosam dicta rem aliquid dignissimos, nostrum magni vitae minus
        earum voluptatem perspiciatis! Enim mollitia nobis vitae suscipit
        aliquid consequuntur dolore quos.
      </p>
    </Modal>
  );
};

export default AddTaskModal;
