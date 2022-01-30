const adminRoutes = [
  {
    path: "/users",
    name: "Users",

    component: () => import("../views/viewRouter.vue"),

    meta: {
      title: "Пользователи",
      icon: "el-icon-s-custom",
    },
    children: [
      {
        path: "list",
        meta: {
          title: "Список пользователей",
        },
        component: () => import("../views/MainPageView"),
      },
    ],
  },
];

export default adminRoutes;
