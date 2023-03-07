const List = ({ totalStudents }) => {
  return (
    <ul>
      <li>Sala 1: {totalStudents.one}</li>
      <li>Sala 2: {totalStudents.two}</li>
      <li>Sala 3: {totalStudents.three}</li>
    </ul>
  );
};

export default List;
