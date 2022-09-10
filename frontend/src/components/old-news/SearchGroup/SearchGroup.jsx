import { SearchBar } from "../../common/SearchBar";

export function SearchGroup() {
  function search(e) {
    // implement search for news here
    e.preventDefault();
  }

  return (
    <>
      {/* need to replace the image with the correct image for the news page */}
      <SearchBar
        imgSrc="/assets/phone.png"
        placeholder="Search keyword"
        titleLine1="Stay Informed on Issues"
        titleLine2="Relevant to You"
        onSubmit={search}
        alt="News page logo"
      />
    </>
  );
}
