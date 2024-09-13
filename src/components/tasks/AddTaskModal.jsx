import { Button } from "@headlessui/react";
import Form from "../form/Form";
import Input from "../form/Input";
import Select from "../form/Select";
import TextArea from "../form/TextArea";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/featuers/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();

  const onCancel = () => {
    setIsOpen(false);
  };

  const handleSubmitTask = (data) => {
    dispatch(addTask(data));
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming Hero"}>
      <Form
        className={" flex flex-col gap-4"}
        onSubmit={handleSubmitTask}
      >
        <Input label="Title" name="title" placeholder="Title here" />
        <TextArea
          name="description"
          label="Description"
          placeholder="Description"
        />
        <Input type="date" label="Dateline" name="dateline" />
        <Select
          name={"assignedTo"}
          label="Assign to"
          defaultValue="MD Shahed"
          options={["MD Shahed", "Tanvir Ahamed"]}
        />
        <Select
          defaultValue="High"
          options={["High", "Low"]}
          label={"Priority"}
          name="priority"
        />
        <div className="flex items-center gap-6">
          <Button
            type="submit"
            className="rounded bg-sky-600 py-2 px-4 w-full text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
          >
            Add Task
          </Button>
          <Button
            onClick={onCancel}
            type="button"
            className="rounded w-full bg-red-600 py-2 px-4 text-sm text-white data-[hover]:bg-red-500 data-[active]:bg-red-700"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
