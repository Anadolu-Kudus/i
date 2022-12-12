import {
	createRouter,
	createWebHistory
} from "vue-router";
import HomeView from "../views/Home.vue";
import ErrorPage from "../views/Error/404-Page.vue";


// هذا للغة 
var langV = localStorage.getItem('lang') || 'tr';

const routes = [{
	path: "/",
	name: (langV == "en") ? 'Home' : 'الصفحة الرئيسية',
	component: HomeView,
},
// الحالة الأخيرة
// اللي بتمثل 
// 404 page errore
{
	path: "/:catchAll(.*)",
	component: ErrorPage,
},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});


// أسماء الصفحات في مشروعي
router.beforeEach((to, from, next) => {

	if (langV == 'en') {
		if (to.name !== undefined) {
			document.title = `${process.env.VUE_APP_TITLE}`;
		} else {
			document.title = `Unknown page | ${process.env.VUE_APP_TITLE}`;
		}
	} else if (langV == 'tr') {
		if (to.name !== undefined) {
			document.title = `${process.env.VUE_APP_TITLE_Tr}`;
		} else {
			document.title = `Unknown page | ${process.env.VUE_APP_TITLE}`;
		}
	} else {
		if (to.name !== undefined) {
			document.title = `${process.env.VUE_APP_TITLE_Ar}`;
		} else {
			document.title = `صفحة غير معرفة | ${process.env.VUE_APP_TITLE_Ar}`;
		}
	}



	next();

});

export default router;