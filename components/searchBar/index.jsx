import styled from "styled-components";

import { IoClose, IoSearch } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MoonLoader from "react-spinners/MoonLoader";
import { useClickOutside } from "react-click-outside-hook";
import useDebounce from "../../hooks/debounceHook";
import axios from "axios";
import Result from "../Result";

const SearchBarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 35rem;
  height: 3.8rem;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 2px 12px 3px rgba(0, 32, 119, 0.14);
`;

const SearchInputContainer = styled.div`
  width: 100%;
  min-height: 4rem;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px 15px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  font-size: 21px;
  color: #18103a;
  border-radius: 6px;
  font-weight: 500;
  background-color: transparent;

  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &::placeholder {
    color: #bdbdbd;
    transition: all 250ms ease-in-out;
  }
`;

const SearchIcon = styled.span`
  color: #bebebe;
  font-size: 27px;
  margin-right: 10px;
  margin-top: 6px;
  vertical-align: middle;
`;

const CloseIcon = styled(motion.span)`
  color: #bebebe;
  font-size: 27px;
  vertical-align: middle;
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #dfdfdf;
  }
`;

const LineSeparator = styled.span`
  display: flex;
  min-width: 100%;
  min-height: 2px;
  background-color: #d8d8d878;
`;

const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  overflow-y: auto;
`;

const WarningMessage = styled.span`
  color: #a1a1a1;
  font-size: 14px;
  display: flex;
  align-self: center;
  justify-self: center;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const containerVariants = {
  expanded: {
    height: "40rem",
  },
  collapsed: {
    height: "3.8rem",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

const SearchBar = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const [parentRef, isClickedOutside] = useClickOutside();
  const inputRef = useRef();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [slides, setSlides] = useState([]);

  const isEmpty = !slides || slides.length === 0;

  const onChangeHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    expandContainer();
  };

  const expandContainer = () => {
    setExpanded(true);
  };

  const collapseContainer = () => {
    setExpanded(false);
    setSearchQuery("");
    setLoading(false);
    setSlides([]);
    if (inputRef.current) inputRef.current.value = "";
  };

  useEffect(() => {
    if (isClickedOutside) collapseContainer();
  }, [isClickedOutside]);

  const prepareSearchQuery = (query) => {
    const url = `api/info`;

    return encodeURI(url);
  };

  const searchSlides = async () => {
    if (!searchQuery || searchQuery.trim() === "") return;

    setLoading(true);

    const URL = prepareSearchQuery(searchQuery);

    const response = await axios.get(URL).catch((err) => {
      console.log(err);
    });

    if (response) {
      setSlides(response.data);
    }

    setLoading(false);
  };

  useDebounce(searchQuery, 500, searchSlides);

  return (
    <SearchBarContainer
      animate={isExpanded ? "expanded" : "collapsed"}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Zoeken..."
          ref={inputRef}
          value={searchQuery}
          onChange={onChangeHandler}
        ></SearchInput>
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      {isExpanded && <LineSeparator />}
      {isExpanded && (
        <SearchContent>
          {isLoading && (
            <LoadingWrapper>
              <MoonLoader loading color="black" size={20} />
            </LoadingWrapper>
          )}
          {!isLoading && isEmpty && (
            <LoadingWrapper>
              <WarningMessage>Niks gevonden!</WarningMessage>
            </LoadingWrapper>
          )}
          {!isLoading && !isEmpty && (
            <>
              {slides.map(({ name, id, image }) => {
                return (
                  <Link href={`/slide/${id}`}>
                    <div>
                      <Result key={id} thumbnailSrc={image} name={name} />
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </SearchContent>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
