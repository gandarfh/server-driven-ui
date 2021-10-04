import { retriever } from "@retriever-ui/react";

interface SearchProps {
  label: string;
  placeholder: string;
  buttonText: string;
}

const Search = ({ buttonText, label, placeholder }: SearchProps) => {
  const Box = retriever("div");
  const Paragraph = retriever("p");
  const Button = retriever("button");
  const Input = retriever("input");
  const Label = retriever("label");

  return (
    <Box
      d="flex"
      bg="black.0"
      radius="30px"
      w="fit-content"
      p="8px 8px 8px 15px"
      alignItems="center"
      justifyContent="space-between"
      style={{ boxShadow: "0px 4px 16px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <Label h="fit-content" htmlFor="search-id" pRight="64px">
        <Paragraph
          fontWeight="bold"
          color="black.600"
          fontSize={{ sm: "14px", md: "16px" }}
        >
          {label}
        </Paragraph>
        <Input
          border="none"
          id="search-id"
          outline="none"
          fontSize="12px"
          placeholder={placeholder}
          width={["max-content", "250px", "250px"] as any}
        />
      </Label>
      <Button
        bg="primary.400"
        p="0 12px"
        h="40px"
        d="flex"
        alignItems="center"
        justifyContent="center"
        color="black.0"
        border="none"
        radius="24px"
        fontSize="12px"
        fontWeight={600}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default Search;
