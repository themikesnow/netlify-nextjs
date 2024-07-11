const Dummy: React.FC = ({ value }: { value: string }) => {
  return (
    <div>
      {value && `The value is: ${value}`}
      {!value && "No value received"}
    </div>
  );
};

export { Dummy };
