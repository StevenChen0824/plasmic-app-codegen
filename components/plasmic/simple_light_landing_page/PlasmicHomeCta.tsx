// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b6dbeCJkpqWf7W4jBYTHqc
// Component: ATkUbCwOTYle

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import TextInput from "../../TextInput"; // plasmic-import: WFOCHderyoi9/component
import Button from "../../Button"; // plasmic-import: NMvbPRurdL54/component

import { useScreenVariants as useScreenVariantssnXxaCjymu4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: snXxaCjymu4-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: b6dbeCJkpqWf7W4jBYTHqc/projectcss
import sty from "./PlasmicHomeCta.module.css"; // plasmic-import: ATkUbCwOTYle/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: huZvRhcATywx/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: N1yQKDiLOeA4/icon
import SphereIcon from "./icons/PlasmicIcon__Sphere"; // plasmic-import: SCa-xGzxn6Zd/icon

createPlasmicElementProxy;

export type PlasmicHomeCta__VariantMembers = {};
export type PlasmicHomeCta__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomeCta__VariantsArgs;
export const PlasmicHomeCta__VariantProps = new Array<VariantPropType>();

export type PlasmicHomeCta__ArgsType = {};
type ArgPropType = keyof PlasmicHomeCta__ArgsType;
export const PlasmicHomeCta__ArgProps = new Array<ArgPropType>();

export type PlasmicHomeCta__OverridesType = {
  root?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
  button?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
};

export interface DefaultHomeCtaProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomeCta__RenderFunc(props: {
  variants: PlasmicHomeCta__VariantsArgs;
  args: PlasmicHomeCta__ArgsType;
  overrides: PlasmicHomeCta__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssnXxaCjymu4()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__t0GRe)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__idaCx
          )}
        >
          {"Powering your business"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__l6Poh
          )}
        >
          {
            "Lorem ipsum dolor sit amet consectetur adipisicing elit nemo expedita voluptas culpa sapiente."
          }
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__mwXu)}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            color={"dark"}
            onChange={(...eventArgs) => {
              generateStateOnChangeProp($state, ["textInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            placeholder={"Your email..."}
            value={generateStateValueProp($state, ["textInput", "value"]) ?? ""}
          />

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue"}
            submitsForm={true}
          >
            {"Subscribe"}
          </Button>
        </Stack__>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__f93Jr
          )}
        >
          {"7 days free trial. No credit card required."}
        </div>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__sQc0P)}>
        <SphereIcon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textInput", "button", "svg"],
  textInput: ["textInput"],
  button: ["button"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  textInput: typeof TextInput;
  button: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomeCta__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomeCta__VariantsArgs;
    args?: PlasmicHomeCta__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomeCta__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomeCta__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomeCta__ArgProps,
          internalVariantPropNames: PlasmicHomeCta__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomeCta__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomeCta";
  } else {
    func.displayName = `PlasmicHomeCta.${nodeName}`;
  }
  return func;
}

export const PlasmicHomeCta = Object.assign(
  // Top-level PlasmicHomeCta renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicHomeCta
    internalVariantProps: PlasmicHomeCta__VariantProps,
    internalArgProps: PlasmicHomeCta__ArgProps
  }
);

export default PlasmicHomeCta;
/* prettier-ignore-end */
