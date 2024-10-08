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
  showLocation: boolean;
};

const SideBar = ({ currentStepIndex, goTo, showLocation = true }: NavProps) => {
  return (
    <div className="absolute -top-20 left-0 w-full lg:w-[25%] lg:relative lg:top-0 lg:left-0">
      <nav className="py-5 text-slate-200 bg-primary-foreground h-full rounded-md border border-border lg:p-5">
        <ul className="flex justify-center gap-2 lg:flex-col">
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm lg:flex">
              step 1
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.BASIC_INFO)}
              className={`text-sm border-b-2 ${
                currentStepIndex === STEPS.BASIC_INFO
                  ? "text-blue font-medium border-b-blue"
                  : "text-primary border-b-transparent"
              } lg:text-base`}
            >
              Information
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm lg:flex">
              step 2
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.DESCRIPTION_AND_TAGS)}
              className={`text-sm border-b-2 ${
                currentStepIndex === STEPS.DESCRIPTION_AND_TAGS
                  ? "text-blue font-medium border-b-blue"
                  : "text-primary border-b-transparent"
              } lg:text-base`}
            >
              Description
            </button>
          </li>
          {showLocation && (
            <li className="flex flex-col items-start font-medium">
              <span className="hidden text-neutral-500 uppercase text-sm lg:flex">
                step 3
              </span>
              <button
                tabIndex={0}
                onClick={() => goTo(STEPS.LOCATION)}
                className={`text-sm border-b-2 ${
                  currentStepIndex === STEPS.LOCATION
                    ? "text-blue font-medium border-b-blue"
                    : "text-primary border-b-transparent"
                } lg:text-base`}
              >
                Location
              </button>
            </li>
          )}
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm lg:flex">
              {showLocation ? "step 4" : "step 3"}
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.MEDIA_AND_RESOURCES)}
              className={`text-sm border-b-2 ${
                currentStepIndex === STEPS.MEDIA_AND_RESOURCES
                  ? "text-blue font-medium border-b-blue"
                  : "text-primary border-b-transparent"
              } lg:text-base`}
            >
              Links
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="hidden text-neutral-500 uppercase text-sm lg:flex">
              {showLocation ? "step 5" : "step 4"}
            </span>
            <button
              tabIndex={0}
              onClick={() => goTo(STEPS.REVIEW_AND_SUBMIT)}
              className={`text-sm border-b-2 ${
                currentStepIndex === STEPS.REVIEW_AND_SUBMIT
                  ? "text-blue font-medium border-b-blue"
                  : "text-primary border-b-transparent"
              } lg:text-base`}
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
