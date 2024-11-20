// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5Fhkbw8v9iAr45cMpgyB5
// Component: WBbXDDW5AxkE
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import PageLayout from "../../PageLayout"; // plasmic-import: LntSjwsq1IGJ/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: n5Fhkbw8v9iAr45cMpgyB5/projectcss
import sty from "./PlasmicUserLoginPage.module.css"; // plasmic-import: WBbXDDW5AxkE/css
import { loggedIn as __fn_user__loggedIn } from "pages/utils_user.js"; // plasmic-import: user.loggedIn/customFunction

createPlasmicElementProxy;

export const PlasmicUserLoginPage__VariantProps = new Array();

export const PlasmicUserLoginPage__ArgProps = new Array();

const $$ = {
  user: {
    loggedIn: __fn_user__loggedIn
  }
};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUserLoginPage__RenderFunc(props) {
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
      },
      {
        path: "loginForm.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "loginForm",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "loginForm.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,
        refName: "loginForm",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      },
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicUserLoginPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicUserLoginPage.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicUserLoginPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"userLogin"}
          data-plasmic-override={overrides.userLogin}
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
            sty.userLogin
          )}
        >
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
                    {"Login"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tOPqL
                    )}
                  >
                    {"Enter your credentials below."}
                  </div>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.loginForm),
                      colon: false,
                      extendedOnValuesChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["loginForm", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: [
                        { label: "Name", name: "name", inputType: "Text" },
                        {
                          label: "Message",
                          name: "message",
                          inputType: "Text Area"
                        }
                      ],

                      labelAlign: "left",
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "horizontal",
                      mode: "advanced",
                      onFinish: async values => {
                        const $steps = {};
                        $steps["callLoginApi"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "i9Spj11A45uiTWnGFR1sKi",
                                  opId: "8b5a23e2-1c9f-4c09-ba84-8132d9d1930a",
                                  userArgs: {
                                    body: [$state.loginForm.value]
                                  },
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["callLoginApi"] != null &&
                          typeof $steps["callLoginApi"] === "object" &&
                          typeof $steps["callLoginApi"].then === "function"
                        ) {
                          $steps["callLoginApi"] = await $steps["callLoginApi"];
                        }
                        $steps["runCode"] = true
                          ? (() => {
                              const actionArgs = {
                                customFunction: async () => {
                                  return $$.user.loggedIn(
                                    $steps.callLoginApi.data.response.jwt,
                                    $steps.callLoginApi.data.response.user
                                  );
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
                      },
                      onIsSubmittingChange:
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "isSubmitting",
                          ["loginForm", "isSubmitting"],
                          FormWrapper_Helpers
                        ),
                      ref: ref => {
                        $refs["loginForm"] = ref;
                      },
                      requiredMark: "optional",
                      submitSlot: null,
                      validateTrigger: ["onSubmit"],
                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "loginForm.value"
                        },
                        {
                          name: "isSubmitting",
                          plasmicStateName: "loginForm.isSubmitting"
                        }
                      ],

                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <FormWrapper
                        data-plasmic-name={"loginForm"}
                        data-plasmic-override={overrides.loginForm}
                        {...child$Props}
                      >
                        <FormItemWrapper
                          data-plasmic-name={"email"}
                          data-plasmic-override={overrides.email}
                          className={classNames("__wab_instance", sty.email)}
                          label={"Email address"}
                          name={"email"}
                          rules={[
                            {
                              ruleType: "required",
                              message: "Enter a valid email address"
                            }
                          ]}
                        >
                          {(() => {
                            const child$Props = {
                              autoFocus: true,
                              className: classNames(
                                "__wab_instance",
                                sty.emailInput
                              ),
                              onChange:
                                generateStateOnChangePropForCodeComponents(
                                  $state,
                                  "value",
                                  ["emailInput", "value"],
                                  AntdInput_Helpers
                                ),
                              type: "email",
                              value: generateStateValueProp($state, [
                                "emailInput",
                                "value"
                              ])
                            };
                            initializeCodeComponentStates(
                              $state,
                              [
                                {
                                  name: "value",
                                  plasmicStateName: "emailInput.value"
                                }
                              ],

                              [],
                              AntdInput_Helpers ?? {},
                              child$Props
                            );
                            return (
                              <AntdInput
                                data-plasmic-name={"emailInput"}
                                data-plasmic-override={overrides.emailInput}
                                {...child$Props}
                              />
                            );
                          })()}
                        </FormItemWrapper>
                        <FormItemWrapper
                          data-plasmic-name={"password"}
                          data-plasmic-override={overrides.password}
                          className={classNames("__wab_instance", sty.password)}
                          label={"Password"}
                          name={"password"}
                          rules={[
                            {
                              ruleType: "required",
                              message: "Password cannot be empty"
                            }
                          ]}
                        >
                          {(() => {
                            const child$Props = {
                              className: classNames(
                                "__wab_instance",
                                sty.passwordInput
                              ),
                              onChange:
                                generateStateOnChangePropForCodeComponents(
                                  $state,
                                  "value",
                                  ["passwordInput", "value"],
                                  AntdInput_Helpers
                                ),
                              placeholder: ``,
                              type: "password",
                              value: generateStateValueProp($state, [
                                "passwordInput",
                                "value"
                              ])
                            };
                            initializeCodeComponentStates(
                              $state,
                              [
                                {
                                  name: "value",
                                  plasmicStateName: "passwordInput.value"
                                }
                              ],

                              [],
                              AntdInput_Helpers ?? {},
                              child$Props
                            );
                            return (
                              <AntdInput
                                data-plasmic-name={"passwordInput"}
                                data-plasmic-override={overrides.passwordInput}
                                {...child$Props}
                              />
                            );
                          })()}
                        </FormItemWrapper>
                        <AntdButton
                          data-plasmic-name={"loginButton"}
                          data-plasmic-override={overrides.loginButton}
                          className={classNames(
                            "__wab_instance",
                            sty.loginButton
                          )}
                          loading={(() => {
                            try {
                              return $state.loginForm.isSubmitting;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })()}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__tjIEu
                            )}
                          >
                            {"Login"}
                          </div>
                        </AntdButton>
                      </FormWrapper>
                    );
                  })()}
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
  userLogin: [
    "userLogin",
    "pageLayout",
    "section",
    "h1",
    "loginForm",
    "email",
    "emailInput",
    "password",
    "passwordInput",
    "loginButton"
  ],

  pageLayout: [
    "pageLayout",
    "section",
    "h1",
    "loginForm",
    "email",
    "emailInput",
    "password",
    "passwordInput",
    "loginButton"
  ],

  section: [
    "section",
    "h1",
    "loginForm",
    "email",
    "emailInput",
    "password",
    "passwordInput",
    "loginButton"
  ],

  h1: ["h1"],
  loginForm: [
    "loginForm",
    "email",
    "emailInput",
    "password",
    "passwordInput",
    "loginButton"
  ],

  email: ["email", "emailInput"],
  emailInput: ["emailInput"],
  password: ["password", "passwordInput"],
  passwordInput: ["passwordInput"],
  loginButton: ["loginButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicUserLoginPage__ArgProps,
          internalVariantPropNames: PlasmicUserLoginPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserLoginPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "userLogin") {
    func.displayName = "PlasmicUserLoginPage";
  } else {
    func.displayName = `PlasmicUserLoginPage.${nodeName}`;
  }
  return func;
}

export const PlasmicUserLoginPage = Object.assign(
  // Top-level PlasmicUserLoginPage renders the root element
  makeNodeComponent("userLogin"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    loginForm: makeNodeComponent("loginForm"),
    email: makeNodeComponent("email"),
    emailInput: makeNodeComponent("emailInput"),
    password: makeNodeComponent("password"),
    passwordInput: makeNodeComponent("passwordInput"),
    loginButton: makeNodeComponent("loginButton"),
    // Metadata about props expected for PlasmicUserLoginPage
    internalVariantProps: PlasmicUserLoginPage__VariantProps,
    internalArgProps: PlasmicUserLoginPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Login",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUserLoginPage;
/* prettier-ignore-end */
