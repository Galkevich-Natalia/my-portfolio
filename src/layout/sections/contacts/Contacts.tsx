import styled from "styled-components";
import { SectionComTitle } from "../../../components/sectionComTitle/SectionComTitle";
import { Button } from "../../../components/Button";

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionComTitle
        title={"Contact"}
        subtitle={"You can contact me by filling out the form below"}
      />
      <StyledForm>
        <Field placeholder={"name"} />
        <Field placeholder={"subject"} />
        <Field placeholder={"message"} as={"textarea"} />

        <Button type={"submit"}>Send message</Button>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  min-height: 50vh;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const Field = styled.input``;
