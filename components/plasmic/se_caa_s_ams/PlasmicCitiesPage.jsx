// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: n5Fhkbw8v9iAr45cMpgyB5
// Component: lkmet7zMq6NP
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
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
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import PageLayout from "../../PageLayout"; // plasmic-import: LntSjwsq1IGJ/component
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: n5Fhkbw8v9iAr45cMpgyB5/projectcss
import sty from "./PlasmicCitiesPage.module.css"; // plasmic-import: lkmet7zMq6NP/css

createPlasmicElementProxy;

export const PlasmicCitiesPage__VariantProps = new Array();

export const PlasmicCitiesPage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCitiesPage__RenderFunc(props) {
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
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "citiesTable.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "citiesTable.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "citiesTable.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "citiesTable.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      },
      {
        path: "pageLayout.baseUrl",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "citiesSearch.value",
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
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  const new$Queries = {
    citiesQuery: usePlasmicDataOp(() => {
      return {
        sourceId: "i9Spj11A45uiTWnGFR1sKi",
        opId: "57095b80-44e3-4b01-8c78-c6419b5db230",
        userArgs: {
          params: [$state.citiesSearch.value],
          path: [
            "api/public/provinces/" +
              ($ctx.params.provinceId ? $ctx.params.provinceId : 0) +
              "/cities"
          ]
        },
        cacheKey: `plasmic.$.57095b80-44e3-4b01-8c78-c6419b5db230.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicCitiesPage.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicCitiesPage.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicCitiesPage.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"cities"}
          data-plasmic-override={overrides.cities}
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
            sty.cities
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
                  onLoad={async event => {
                    const $steps = {};
                    $steps["useIntegration"] = true
                      ? (() => {
                          const actionArgs = {};
                          return (async ({ dataOp, continueOnError }) => {
                            try {
                              const response = await executePlasmicDataOp(
                                dataOp,
                                {
                                  userAuthToken: dataSourcesCtx?.userAuthToken,
                                  user: dataSourcesCtx?.user
                                }
                              );
                              await plasmicInvalidate(dataOp.invalidatedKeys);
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
                      $steps["useIntegration"] != null &&
                      typeof $steps["useIntegration"] === "object" &&
                      typeof $steps["useIntegration"].then === "function"
                    ) {
                      $steps["useIntegration"] = await $steps["useIntegration"];
                    }
                  }}
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
                    {"Cities"}
                  </h1>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v3DyQ
                    )}
                  >
                    {"Here are list of cities."}
                  </div>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox)}
                  >
                    {(() => {
                      const child$Props = {
                        addonAfter: null,
                        addonBefore: (
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__avIlI
                            )}
                          >
                            {"Search.."}
                          </div>
                        ),

                        allowClear: true,
                        autoFocus: true,
                        bordered: true,
                        className: classNames(
                          "__wab_instance",
                          sty.citiesSearch
                        ),
                        onChange: async (...eventArgs) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["citiesSearch", "value"],
                            AntdInput_Helpers
                          ).apply(null, eventArgs);
                          (async event => {
                            const $steps = {};
                          }).apply(null, eventArgs);
                        },
                        type: "text",
                        value: generateStateValueProp($state, [
                          "citiesSearch",
                          "value"
                        ])
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "citiesSearch.value"
                          }
                        ],

                        [],
                        AntdInput_Helpers ?? {},
                        child$Props
                      );
                      return (
                        <AntdInput
                          data-plasmic-name={"citiesSearch"}
                          data-plasmic-override={overrides.citiesSearch}
                          {...child$Props}
                        />
                      );
                    })()}
                  </Stack__>
                  {(() => {
                    const child$Props = {
                      canSelectRows: "click",
                      className: classNames("__wab_instance", sty.citiesTable),
                      data: (() => {
                        try {
                          return $queries.citiesQuery.data.response.cities;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      defaultSize: "small",
                      fields: (() => {
                        const __composite = [
                          {
                            key: "id",
                            fieldId: "id",
                            isHidden: null,
                            title: null
                          },
                          { key: "name", fieldId: "name", title: null },
                          { key: "slug", fieldId: "slug", title: null },
                          {
                            key: "createdAt",
                            fieldId: "createdAt",
                            isHidden: null
                          },
                          {
                            key: "updatedAt",
                            fieldId: "updatedAt",
                            isHidden: null
                          }
                        ];

                        __composite["0"]["isHidden"] = true;
                        __composite["0"]["title"] = "ID";
                        __composite["1"]["title"] = "Name";
                        __composite["2"]["title"] = "Slug";
                        __composite["3"]["isHidden"] = true;
                        __composite["4"]["isHidden"] = true;
                        return __composite;
                      })(),
                      hideColumnPicker: true,
                      hideDensity: true,
                      hideSearch: true,
                      onRowClick: async (rowKey, row, event) => {
                        const $steps = {};
                      },
                      onRowSelectionChanged: async (...eventArgs) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKey",
                          ["citiesTable", "selectedRowKey"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRow",
                          ["citiesTable", "selectedRow"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRows",
                          ["citiesTable", "selectedRows"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKeys",
                          ["citiesTable", "selectedRowKeys"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                      },
                      pageSize: 100,
                      rowKey: ``,
                      scopeClassName: sty["citiesTable__instance"],
                      selectedRowKey: generateStateValueProp($state, [
                        "citiesTable",
                        "selectedRowKey"
                      ]),
                      selectedRowKeys: generateStateValueProp($state, [
                        "citiesTable",
                        "selectedRowKeys"
                      ]),
                      themeResetClassName: classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens
                      )
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "selectedRowKey",
                          plasmicStateName: "citiesTable.selectedRowKey"
                        },
                        {
                          name: "selectedRow",
                          plasmicStateName: "citiesTable.selectedRow"
                        },
                        {
                          name: "selectedRows",
                          plasmicStateName: "citiesTable.selectedRows"
                        },
                        {
                          name: "selectedRowKeys",
                          plasmicStateName: "citiesTable.selectedRowKeys"
                        }
                      ],

                      [],
                      RichTable_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <RichTable
                        data-plasmic-name={"citiesTable"}
                        data-plasmic-override={overrides.citiesTable}
                        {...child$Props}
                      />
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
  cities: [
    "cities",
    "pageLayout",
    "section",
    "h1",
    "freeBox",
    "citiesSearch",
    "citiesTable"
  ],

  pageLayout: [
    "pageLayout",
    "section",
    "h1",
    "freeBox",
    "citiesSearch",
    "citiesTable"
  ],

  section: ["section", "h1", "freeBox", "citiesSearch", "citiesTable"],
  h1: ["h1"],
  freeBox: ["freeBox", "citiesSearch"],
  citiesSearch: ["citiesSearch"],
  citiesTable: ["citiesTable"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCitiesPage__ArgProps,
          internalVariantPropNames: PlasmicCitiesPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCitiesPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "cities") {
    func.displayName = "PlasmicCitiesPage";
  } else {
    func.displayName = `PlasmicCitiesPage.${nodeName}`;
  }
  return func;
}

export const PlasmicCitiesPage = Object.assign(
  // Top-level PlasmicCitiesPage renders the root element
  makeNodeComponent("cities"),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    freeBox: makeNodeComponent("freeBox"),
    citiesSearch: makeNodeComponent("citiesSearch"),
    citiesTable: makeNodeComponent("citiesTable"),
    // Metadata about props expected for PlasmicCitiesPage
    internalVariantProps: PlasmicCitiesPage__VariantProps,
    internalArgProps: PlasmicCitiesPage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Cities",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCitiesPage;
/* prettier-ignore-end */
