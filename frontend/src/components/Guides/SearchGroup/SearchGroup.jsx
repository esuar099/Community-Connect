import { SearchBar } from "../../common/SearchBar";

export function SearchGroup() {
  function search(e) {
    // implement search for guides here
    e.preventDefault();
  }

  return (
    <>
      <SearchBar 
        imgSrc="/assets/phone.png" 
        placeholder="Search keyword"
        titleLine1="Access trustworthy knowledge"
        titleLine2="by certified sources"
        onSubmit={search}
        alt="Guides page logo"
      />
    </>
  );
};
