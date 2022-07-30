import ResidentsList from "../../components/ResidentsList";

export default function Residents() {
  return <ResidentsList />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
