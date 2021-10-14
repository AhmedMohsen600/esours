import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components";
import data from "../data/data.json";

export function HeaderContainer({
  category,
  setCategory,
  setCardData,
  section,
}) {
  const { pathname } = useLocation();

  const handleClick = (e) => {
    switch (e.target.value) {
      case "All":
        setCategory("all");
        setCardData(data[section]);
        break;
      case "Furniture":
        setCategory("furniture");
        setCardData(
          data[section].filter((item) => item.categories.includes("Furniture"))
        );
        break;
      case "Lighting":
        setCategory("lighting");
        setCardData(
          data[section].filter((item) => item.categories.includes("Lighting"))
        );
        break;
      case "Accessories":
        setCategory("accessories");
        setCardData(
          data[section].filter((item) =>
            item.categories.includes("Accessories")
          )
        );
        break;
      case "Textiles":
        setCategory("textiles");
        setCardData(
          data[section].filter((item) => item.categories.includes("Textile"))
        );
        break;
      case "Materials":
        setCategory("materials");
        setCardData(
          data[section].filter((item) => item.categories.includes("Materials"))
        );
        break;
      default:
        setCategory("all");
        setCardData(data[section]);
    }
  };
  return (
    <Header>
      <Header.Frame>
        <Header.Inner>
          <svg xmlns="http://www.w3.org/2000/svg" width="102" height="38">
            <path
              d="M 12.782 23.894 L 12.782 26.174 C 12.782 27.174 12.782 27.786 12.587 28.694 C 11.804 32.57 9.299 32.853 6.674 31.924 C 2.62 30.425 1.265 27.689 0.766 25.777 C 0.461 24.7 0.423 23.286 0.423 23.045 L 0.423 14.52 C 0.461 14.195 0.461 12.869 0.918 11.658 C 1.866 9.006 4.389 6.988 6.713 6.181 C 9.921 5.033 11.728 6.819 12.316 8.432 C 12.667 9.352 12.748 10.226 12.866 12.384 L 12.866 20.512 C 10.217 20.44 7.584 20.355 4.981 20.262 L 4.981 24.134 C 4.981 24.966 4.981 25.287 5.096 25.726 C 5.405 26.988 6.289 27.347 6.679 27.432 C 7.415 27.601 7.919 27.212 8.152 26.347 C 8.228 26.06 8.27 25.46 8.266 25.46 L 8.304 23.45 C 9.785 23.606 11.279 23.754 12.782 23.894 Z M 8.257 16.137 L 8.257 12.962 C 8.257 12.413 8.334 10.357 6.67 10.737 C 5.011 11.172 5.011 12.874 4.973 13.477 L 4.973 16.382 C 6.065 16.298 7.161 16.213 8.257 16.137 Z M 19.68 23.775 L 19.68 26.258 C 19.719 27.318 19.719 27.689 19.799 28.259 C 19.879 29.011 20.273 30.379 21.505 30.552 C 21.665 30.573 22.182 30.645 22.58 30.244 C 22.978 29.91 23.375 28.918 23.375 27.166 C 23.375 24.768 23.134 24.223 21.983 22.83 C 20.658 21.263 19.333 19.756 18.017 18.337 C 16.197 16.12 15.609 14.626 15.609 11.176 C 15.647 5.282 18.085 2.892 21.746 2.136 C 24.73 1.541 26.372 3.044 27.011 4.919 C 27.489 6.207 27.532 7.621 27.57 9.031 L 27.57 12.869 C 26.194 12.937 24.823 13.013 23.456 13.097 L 23.456 10.699 C 23.456 10.184 23.536 7.043 21.704 7.296 C 21.505 7.321 21.225 7.364 20.827 7.735 C 20.231 8.385 20.074 9.403 20.074 10.399 C 20.074 12.27 20.548 12.722 21.424 13.807 C 22.88 15.344 24.345 16.973 25.809 18.671 C 26.169 19.266 26.689 20.001 27.049 20.744 C 27.527 21.892 27.811 23.454 27.811 26.355 C 27.811 28.981 27.811 31.705 26.732 33.786 C 25.851 35.484 24.408 36.531 21.509 35.952 C 19.24 35.509 16.752 34.187 15.77 30.493 C 15.338 28.893 15.338 27.098 15.338 26.57 L 15.338 23.488 C 16.777 23.585 18.229 23.682 19.68 23.775 Z M 43.589 27.938 C 43.509 30.514 43.386 32.38 42.421 34.382 C 40.605 38.249 37.744 37.975 36.936 37.92 C 35.967 37.865 35.243 37.595 34.883 37.43 C 34.079 37.096 31.865 35.69 31.061 31.485 C 30.82 30.294 30.74 29.188 30.702 26.706 L 30.702 10.931 C 30.74 8.52 30.862 7.545 31.104 6.422 C 32.064 1.934 34.76 0.312 37.219 0.182 C 37.863 0.122 41.816 -0.089 43.107 5.379 C 43.428 6.667 43.509 7.815 43.589 10.247 Z M 38.832 9.796 C 38.79 7.516 38.709 6.519 38.066 5.827 C 37.744 5.413 37.342 5.426 37.177 5.434 C 36.652 5.455 36.373 5.751 36.212 5.97 C 35.446 6.996 35.526 8.474 35.488 9.956 L 35.488 28.297 C 35.531 28.931 35.446 32.038 37.139 32.11 C 38.955 32.178 38.832 28.888 38.832 28.318 Z M 51.694 1.005 L 51.656 5.586 C 51.775 5.24 52.02 4.404 52.38 3.517 C 53.747 0.511 55.516 0.642 56.358 0.806 C 56.345 3.513 56.333 6.224 56.316 8.93 C 55.956 8.63 55.554 8.33 54.75 8.28 C 54.471 8.263 53.666 8.216 52.938 9.023 C 51.609 10.581 51.652 13.414 51.652 15.808 L 51.652 37.109 C 50.069 37.219 48.482 37.295 46.895 37.341 L 46.895 0.764 C 48.499 0.815 50.099 0.895 51.694 1.005 Z M 63.443 2.424 L 63.443 26.334 C 63.405 27.504 63.363 28.686 63.883 29.471 C 64.243 30.016 64.679 30.214 65.157 30.155 C 65.318 30.134 65.915 29.99 66.351 29.37 C 67.146 28.2 66.986 25.861 66.986 25.671 L 66.986 3.091 C 68.573 3.416 70.156 3.77 71.73 4.163 L 71.73 33.951 C 70.156 34.344 68.573 34.698 66.986 35.023 L 66.986 32.406 C 66.469 33.225 64.924 36.003 62.647 36.417 C 62.25 36.484 61.213 36.531 60.252 35.593 C 58.61 33.871 58.652 30.78 58.652 27.871 L 58.652 1.697 C 60.252 1.908 61.848 2.149 63.443 2.424 Z M 78.802 22.889 L 78.802 24.903 C 78.84 25.751 78.84 26.055 78.921 26.494 C 78.997 27.086 79.386 28.061 80.584 27.77 C 80.741 27.736 81.24 27.609 81.625 27.191 C 82.011 26.815 82.396 26 82.396 24.772 C 82.396 23.079 82.167 22.766 81.046 21.863 C 79.759 20.837 78.468 19.688 77.169 18.43 C 75.378 16.454 74.786 14.871 74.786 11.628 C 74.824 5.953 77.258 5.05 80.813 6.338 C 83.708 7.389 85.265 9.137 85.875 10.48 C 86.332 11.438 86.37 12.274 86.408 13.123 L 86.408 15.394 C 85.104 15.208 83.788 15.031 82.468 14.862 L 82.468 13.178 C 82.468 12.814 82.548 10.657 80.77 10.201 C 80.576 10.154 80.305 10.087 79.92 10.243 C 79.34 10.551 79.183 11.324 79.183 12.122 C 79.183 13.621 79.649 14.094 80.5 15.056 C 81.917 16.446 83.327 17.704 84.728 18.806 C 85.071 19.19 85.57 19.642 85.909 20.072 C 86.366 20.748 86.632 21.626 86.632 23.319 C 86.632 24.869 86.632 26.397 85.604 28.086 C 84.766 29.454 83.395 30.852 80.576 31.857 C 78.375 32.629 75.916 32.862 74.938 29.758 C 74.507 28.42 74.507 26.693 74.507 26.199 L 74.507 23.264 C 75.95 23.146 77.38 23.02 78.802 22.889 Z M 94.272 21.487 L 94.272 18.514 L 93.061 18.514 L 93.061 17.746 L 96.506 17.746 L 96.506 18.514 L 95.292 18.514 L 95.292 21.487 Z M 96.942 21.487 L 96.942 17.746 L 98.529 17.746 L 98.982 19.182 C 99.143 19.705 99.219 19.992 99.283 20.229 C 99.351 19.984 99.427 19.705 99.583 19.182 L 100.053 17.746 L 101.577 17.746 L 101.577 21.487 L 100.586 21.487 L 100.586 18.561 L 99.664 21.487 L 98.843 21.487 L 97.928 18.565 L 97.928 21.487 Z"
              fill="rgb(255,255,255)"
            ></path>
          </svg>
          <Header.Group>
            <Header.Link
              selected={pathname === "/all-submitions" ? true : false}
              to="/all-submitions"
            >
              All submitions
            </Header.Link>
            <Header.Link
              selected={pathname === "/shortlist" ? true : false}
              to="/shortlist"
            >
              Shortlisted
            </Header.Link>
            <Header.Link
              selected={pathname === "/rejected" ? true : false}
              to="/rejected"
            >
              Rejected
            </Header.Link>
          </Header.Group>
        </Header.Inner>
      </Header.Frame>
      <Header.Nav>
        <Header.PageTitle>
          {pathname === "/all-submitions"
            ? "All submissions"
            : pathname.slice(1).replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
        </Header.PageTitle>
        <Header.Group>
          <Header.FilterButton
            active={category === "all" ? true : false}
            onClick={handleClick}
            value="All"
          >
            All
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "furniture" ? true : false}
            onClick={handleClick}
            value="Furniture"
          >
            Furniture
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "lighting" ? true : false}
            onClick={handleClick}
            value="Lighting"
          >
            Lighting
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "accessories" ? true : false}
            onClick={handleClick}
            value="Accessories"
          >
            Accessories
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "textiles" ? true : false}
            onClick={handleClick}
            value="Textiles"
          >
            Textiles
          </Header.FilterButton>
          <Header.FilterButton
            active={category === "materials" ? true : false}
            onClick={handleClick}
            value="Materials"
          >
            Materials
          </Header.FilterButton>
        </Header.Group>
      </Header.Nav>
    </Header>
  );
}
