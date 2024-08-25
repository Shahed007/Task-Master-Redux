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
  const handleSubmitTask = (data) => {
    dispatch(addTask(data));
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming Hero"}>
      <Form
        className={"w-[320px] flex flex-col gap-4"}
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
          name={"assign"}
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
        <Button
          type="submit"
          className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
        >
          Add Task
        </Button>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
