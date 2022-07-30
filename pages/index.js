import LocationsList from "../components/LocationsList";

export default function Home() {
  return (
    <>
      <LocationsList />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
