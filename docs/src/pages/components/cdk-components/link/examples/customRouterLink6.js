import { DxcLink } from "@dxc-technology/halstack-react";
import { Link as RouterLink } from "react-router-dom";

const useHref = (to) => {};

const useLinkClickHandler = (to, { replace, state, target }) => {};

const code = `() => {
    const CustomLink = React.forwardRef(
        ({
            onClick,
            replace = false,
            state,
            target,
            to,
            ...rest
          },
          ref
        ) => {
          let href = useHref(to);
          let handleClick = useLinkClickHandler(to, {
            replace,
            state,
            target,
          });
      
          return (
            <DxcLink
              {...rest}
              href={href}
              onClick={(event) => {
                if (!event.defaultPrevented) {
                  handleClick(event);
                }
              }}
              ref={ref}
              target={target}
            />
          );
        }
      );
    return (
        <p>
            This is a text with a 
            <CustomLink to="/components/button" component={DxcLink}>React Router v6</CustomLink >
            {" "}link.
        </p>
    );
    
}`;

const scope = {
  DxcLink,
  RouterLink,
  useHref,
  useLinkClickHandler,
};

export default { code, scope };
