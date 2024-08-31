export enum STEPS {
    BASIC_INFO = 0,
    DESCRIPTION_AND_TAGS = 1,
    LOCATION = 2,
    MEDIA_AND_RESOURCES = 3,
    REVIEW_AND_SUBMIT = 4,
  }

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="absolute -top-20 left-0 w-full md:w-[25%] md:relative md:top-0 md:left-0">
      <nav className="py-5 text-slate-200 bg-secondary h-full rounded-md border border-border md:p-5">
        <ul className="flex justify-center gap-2 md:flex-col">
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm md:flex">
              step 1
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.BASIC_INFO)}
              className={`text-sm ${
                currentStepIndex === STEPS.BASIC_INFO
                  ? "text-yellow"
                  : "text-primary"
              } md:text-base`}
            >
              Information
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm md:flex">
              step 2
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.DESCRIPTION_AND_TAGS)}
              className={`text-sm ${
                currentStepIndex === STEPS.DESCRIPTION_AND_TAGS
                  ? "text-red"
                  : "text-primary"
              } md:text-base`}
            >
              Description
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm md:flex">
              step 3
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.LOCATION)}
              className={`text-sm ${
                currentStepIndex === STEPS.LOCATION
                  ? "text-green"
                  : "text-primary"
              } md:text-base`}
            >
              Location
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm md:flex">
              step 4
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.MEDIA_AND_RESOURCES)}
              className={`text-sm ${
                currentStepIndex === STEPS.MEDIA_AND_RESOURCES
                  ? "text-blue"
                  : "text-primary"
              } md:text-base`}
            >
              Links
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm md:flex">
              step 5
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.REVIEW_AND_SUBMIT)}
              className={`text-sm ${
                currentStepIndex === STEPS.REVIEW_AND_SUBMIT
                  ? "text-[#E7B8FF]"
                  : "text-primary"
              } md:text-base`}
            >
              Summary
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
