// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: b6dbeCJkpqWf7W4jBYTHqc
// Component: Z6WvGnQNJezj

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

import Header from "../../Header"; // plasmic-import: fDfqd0NlSD4a/component
import Section from "../../Section"; // plasmic-import: n4W57medNYwN/component
import Bullet from "../../Bullet"; // plasmic-import: 9A6S-uLUCwJ0/component
import Button from "../../Button"; // plasmic-import: NMvbPRurdL54/component
import HomeCta from "../../HomeCta"; // plasmic-import: ATkUbCwOTYle/component
import Footer from "../../Footer"; // plasmic-import: 2VJ6NQP-ld2q/component

import { useScreenVariants as useScreenVariantssnXxaCjymu4 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: snXxaCjymu4-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: b6dbeCJkpqWf7W4jBYTHqc/projectcss
import sty from "./PlasmicFeatures.module.css"; // plasmic-import: Z6WvGnQNJezj/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: N1yQKDiLOeA4/icon

createPlasmicElementProxy;

export type PlasmicFeatures__VariantMembers = {};
export type PlasmicFeatures__VariantsArgs = {};
type VariantPropType = keyof PlasmicFeatures__VariantsArgs;
export const PlasmicFeatures__VariantProps = new Array<VariantPropType>();

export type PlasmicFeatures__ArgsType = {};
type ArgPropType = keyof PlasmicFeatures__ArgsType;
export const PlasmicFeatures__ArgProps = new Array<ArgPropType>();

export type PlasmicFeatures__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  section?: Flex__<typeof Section>;
  homeCta?: Flex__<typeof HomeCta>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultFeaturesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFeatures__RenderFunc(props: {
  variants: PlasmicFeatures__VariantsArgs;
  args: PlasmicFeatures__ArgsType;
  overrides: PlasmicFeatures__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssnXxaCjymu4()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"The ultimate in feature set."}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__zIi1)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__vc3Kg)}
              >
                <div className={classNames(projectcss.all, sty.column__zwYqt)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yLGrm)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hzF5M
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vnGiO
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___1Dh7X
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__dhPwO
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___5T56Y
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bjIc
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__iQjP)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___3IrK
                        )}
                        color={"blue"}
                        submitsForm={true}
                      >
                        {"Start free trial"}
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___8Sozf
                        )}
                        color={"outlineBlue"}
                        submitsForm={true}
                      >
                        {"View demo"}
                      </Button>
                    </Stack__>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__jo20F)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___8Sl8)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__u5VSd)}
              >
                <div className={classNames(projectcss.all, sty.column__t9Baq)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__dxInK)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.column__naW3N)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__pzJfv)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___8BmSz
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__j5Eiq
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___4FUvG
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__cvEf0
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__aqjIb
                      )}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9Zvh3
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__zaHse)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__bNbTq
                        )}
                        color={"blue"}
                        submitsForm={true}
                      >
                        {"Start free trial"}
                      </Button>
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__rvT7O
                        )}
                        color={"outlineBlue"}
                        submitsForm={true}
                      >
                        {"View demo"}
                      </Button>
                    </Stack__>
                  </Stack__>
                </div>
              </Stack__>
            </Stack__>
          </Section>
          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  section: typeof Section;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatures__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatures__VariantsArgs;
    args?: PlasmicFeatures__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeatures__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFeatures__ArgsType,
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
          internalArgPropNames: PlasmicFeatures__ArgProps,
          internalVariantPropNames: PlasmicFeatures__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
