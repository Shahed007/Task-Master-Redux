import React from "react";
import Modal from "../ui/Modal";
import { useSelector } from "react-redux";

const TaskDetailsModal = ({ isOpen, setIsOpen, taskId }) => {
  const { task } = useSelector((state) => state.taskSlice);


  const filterTask = task.find((item) => item.id === taskId);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={filterTask?.title}>
      <p className="mt-12">{filterTask?.description}</p>
    </Modal>
  );
};

export default TaskDetailsModal;
