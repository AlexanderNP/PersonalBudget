import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import { Flex } from "antd";
import { FormActionIncome } from "@/modules/ActionsBudget/components/FormActionIncome";
import { FormActionExpenses } from "@/modules/ActionsBudget/components/FormActionExpenses";
import { useModal } from "@/hooks/useModal";

export const ActionsBudget = () => {
  const { isOpen: isOpenModalExpenses, toggle: toggleModalExpenses } = useModal();
  const { isOpen: isOpenModalIncome, toggle: toggleModalIncome } = useModal();

  return (
    <>
      <Flex gap={20}>
        <Button
          callback={toggleModalExpenses}
          style={{ backgroundColor: "#fd5151" }}
        >
          Добавить расходы
        </Button>
        <Button
          callback={toggleModalIncome}
          style={{ backgroundColor: "#1677ff" }}
        >
          Добавить доходы
        </Button>
      </Flex>
      <Modal
        isOpen={isOpenModalExpenses}
        toggle={toggleModalExpenses}
        title={"Управлениe бюджетом расходов"}
      >
        <FormActionExpenses />
      </Modal>
      <Modal
        isOpen={isOpenModalIncome}
        toggle={toggleModalIncome}
        title={"Управлениe бюджетом доходов"}
      >
        <FormActionIncome />
      </Modal>
    </>
  );
};
