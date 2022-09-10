import { SearchBar } from "../../common/SearchBar";

export function SearchGroup() {
  function search(e) {
    // implement search for news here
    e.preventDefault();
  }

  return (
    <>
      {/* need to replace the image with the correct image for the trends page */}
      <SearchBar
        imgSrc="/assets/phone.png"
        placeholder="Search keyword"
        titleLine1="Read your area's"
        titleLine2="trending content"
        onSubmit={search}
        alt="News page logo"
      />
    </>
  );
}
