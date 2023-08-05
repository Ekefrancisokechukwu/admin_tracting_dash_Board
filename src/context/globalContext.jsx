import { createContext, useContext, useEffect, useState } from "react";
import { colorsThemes, steps } from "../utils/data";
import { useMediaQuery } from "react-responsive";
import { arrayMove } from "@dnd-kit/sortable";
import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const storedDark = localStorage.getItem("darkTheme") === "true";
  return storedDark;
};

export const AppProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(getInitialDarkMode());
  const [navBarFixed, setNavBarFixed] = useState(false);
  const [values, setValues] = useState({
    name: "",
    description: "",
    category: "clothing",
    image: null,
    price: null,
    status: "in stock",
    sku: "",
  });
  const [isFullScreen, setIsFullscreen] = useState();
  const [currentStep, setCurrentStep] = useState(1);
  const [theme, setTheme] = useState(colorsThemes[0]);
  const [isBoardNameModelOpen, setisBoardNameModelOpen] = useState(false);

  // media query
  const deskScreen = useMediaQuery({ query: "(max-width: 992px)" });

  // multi step form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ [name]: value });
  };

  const toggleDarkTheme = () => {
    let newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkTheme", newDarkMode);
  };

  const handleNavbar = (e) => {
    let name = e.target.name;
    let check = e.target.checked;
    setNavBarFixed(!navBarFixed);
    return { [name]: check };
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep < steps.length + 1 && setCurrentStep(newStep);
  };

  const toggleFullScreen = () => {
    setIsFullscreen(!isFullScreen);
  };

  useEffect(() => {
    if (isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
      if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    }

    return () => {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    };
  }, [isFullScreen]);

  const nextBtn = () => {
    let newStep = currentStep + 1;
    if (newStep > steps.length) {
      return;
    }

    setCurrentStep(newStep);
  };

  const handleStepperClick = (index) => {
    setCurrentStep(index + 1);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <AppContext.Provider
      value={{
        toggleDarkTheme,
        isDarkMode,
        navBarFixed,
        handleNavbar,
        theme,
        setTheme,
        deskScreen,
        currentStep,
        setCurrentStep,
        handleClick,
        handleStepperClick,
        nextBtn,
        values,
        handleChange,
        toggleFullScreen,
        isFullScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
