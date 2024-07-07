import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);

  console.log(data);

  return <div>This is academic semester</div>;
};

export default AcademicSemester;
