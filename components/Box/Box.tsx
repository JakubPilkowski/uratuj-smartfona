import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ReactElement,
  Ref,
} from "react";

const BoxContainer = <T extends ElementType = "div">(
  { component: Component = "div", ...props }: BoxProps<T>,
  ref: Ref<Element>
): ReactElement => {
  return <Component ref={ref} {...props} />;
};

export type BoxProps<T extends ElementType = "div"> = {
  component: T;
} & ComponentPropsWithRef<T>;

const Box = forwardRef(BoxContainer) as <T extends ElementType = "div">(
  props: BoxProps<T> & { ref?: Ref<Element> }
) => ReactElement;

export default Box;
