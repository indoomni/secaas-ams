// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5Fhkbw8v9iAr45cMpgyB5
// Component: DbH1wPy29Kzp
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";
import PageLayout from "../../PageLayout"; // plasmic-import: LntSjwsq1IGJ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: n5Fhkbw8v9iAr45cMpgyB5/projectcss
import sty from "./PlasmicUserLogoutPage.module.css"; // plasmic-import: DbH1wPy29Kzp/css
import { loggedOut as __fn_user__loggedOut } from "../../../pages/utils_user"; // plasmic-import: user.loggedOut/customFunction

createPlasmicElementProxy;

export const PlasmicUserLogoutPage__VariantProps = new Array();

export const PlasmicUserLogoutPage__ArgProps = new Array();

const $$ = {
  user: {
    loggedOut: __fn_user__loggedOut
  }
};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUserLogoutPage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "pageLayout.baseUrl",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicUserLogoutPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicUserLogoutPage.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicUserLogoutPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"userLogout"}
          data-plasmic-override={overrides.userLogout}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.userLogout
          )}
        >
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            onMount={async () => {
              const $steps = {};
              $steps["runCode"] = true
                ? (() => {
                    const actionArgs = {
                      customFunction: async () => {
                        return $$.user.loggedOut();
                      }
                    };
                    return (({ customFunction }) => {
                      return customFunction();
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runCode"] != null &&
                typeof $steps["runCode"] === "object" &&
                typeof $steps["runCode"].then === "function"
              ) {
                $steps["runCode"] = await $steps["runCode"];
              }
              $steps["goToHomePage"] = true
                ? (() => {
                    const actionArgs = { destination: `/` };
                    return (({ destination }) => {
                      if (
                        typeof destination === "string" &&
                        destination.startsWith("#")
                      ) {
                        document
                          .getElementById(destination.substr(1))
                          .scrollIntoView({ behavior: "smooth" });
                      } else {
                        __nextRouter?.push(destination);
                      }
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["goToHomePage"] != null &&
                typeof $steps["goToHomePage"] === "object" &&
                typeof $steps["goToHomePage"].then === "function"
              ) {
                $steps["goToHomePage"] = await $steps["goToHomePage"];
              }
            }}
          />

          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
            onBaseUrlChange={generateStateOnChangeProp($state, [
              "pageLayout",
              "baseUrl"
            ])}
          >
            <DataCtxReader__>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Logging out.."}
                  </h1>
                  <div
                    data-plasmic-name={"text"}
                    data-plasmic-override={overrides.text}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"Enter your credentials below."}
                  </div>
                </section>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  userLogout: [
    "userLogout",
    "sideEffect",
    "pageLayout",
    "section",
    "h1",
    "text"
  ],

  sideEffect: ["sideEffect"],
  pageLayout: ["pageLayout", "section", "h1", "text"],
  section: ["section", "h1", "text"],
  h1: ["h1"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicUserLogoutPage__ArgProps,
          internalVariantPropNames: PlasmicUserLogoutPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserLogoutPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "userLogout") {
    func.displayName = "PlasmicUserLogoutPage";
  } else {
    func.displayName = `PlasmicUserLogoutPage.${nodeName}`;
  }
  return func;
}

export const PlasmicUserLogoutPage = Object.assign(
  // Top-level PlasmicUserLogoutPage renders the root element
  makeNodeComponent("userLogout"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicUserLogoutPage
    internalVariantProps: PlasmicUserLogoutPage__VariantProps,
    internalArgProps: PlasmicUserLogoutPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Logout",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUserLogoutPage;
/* prettier-ignore-end */