import React, { Suspense, lazy } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "./components/@vuexy/spinner/Loading-spinner";
import knowledgeBaseCategory from "./views/pages/knowledge-base/Category";
import knowledgeBaseQuestion from "./views/pages/knowledge-base/Questions";
import { ContextLayout } from "./utility/context/Layout";

//import EnquiryFormList from "./views/apps/contactUs/EnquiryFormList";
//import { Component } from "react";
//import { starTask } from "./redux/actions/todo";

// Route-based code splitting
const analyticsDashboard = lazy(() =>
  import("./views/dashboard/analytics/AnalyticsDashboard")
);
const ecommerceDashboard = lazy(() =>
  import("./views/dashboard/ecommerce/EcommerceDashboard")
);
const home = lazy(() => import("./views/pages/landingPage/Home"));
// const sellerDashboard = lazy(()=> import("./views/dashboard/seller/SellerDeshboard"));
// My Component starts here

const sellerList = lazy(() => import("./views/apps/seller/SellerList"));
const editSeller = lazy(() => import("./views/apps/seller/EditSeller"));
const viewSeller = lazy(() => import("./views/apps/seller/ViewSeller"));
const addSeller = lazy(() => import("./views/apps/seller/AddSeller"));
const allUsers = lazy(() => import("./views/apps/users/user/AllUsers"));
const addUsers = lazy(() => import("./views/apps/users/user/AddUsers"));
const viewUsers = lazy(() => import("./views/apps/users/user/ViewUsers"));
const roleList = lazy(() => import("./views/apps/roleAndPermission/RoleList"));
const addRole = lazy(() => import("./views/apps/roleAndPermission/AddRole"));
const viewRole = lazy(() => import("./views/apps/roleAndPermission/ViewRole"));

const productsList = lazy(() =>
  import("./views/apps/products/product/ProductsList")
);
const editProducts = lazy(() =>
  import("./views/apps/products/product/EditProducts")
);
const viewProducts = lazy(() =>
  import("./views/apps/products/product/ViewProducts")
);
const addProducts = lazy(() =>
  import("./views/apps/products/product/AddProducts")
);
const addMyProduct = lazy(() =>
  import("./views/apps/products/product/AddMyProduct")
);
const brandList = lazy(() => import("./views/apps/products/brand/BrandList"));
const addBrand = lazy(() => import("./views/apps/products/brand/AddBrand"));
const viewBrand = lazy(() => import("./views/apps/products/brand/ViewBrand"));
const editBrand = lazy(() => import("./views/apps/products/brand/EditBrand"));
const unitList = lazy(() => import("./views/apps/products/unit/UnitList"));
const addUnit = lazy(() => import("./views/apps/products/unit/AddUnit"));
const editUnit = lazy(() => import("./views/apps/products/unit/EditUnit"));
const coupon = lazy(() => import("./views/apps/products/coupon/Coupon"));
const addCoupon = lazy(() => import("./views/apps/products/coupon/AddCoupon"));
const categoryList = lazy(() => import("./views/apps/category/CategoryList"));
const addCategory = lazy(() => import("./views/apps/category/AddCategory"));
const editCategory = lazy(() => import("./views/apps/category/EditCategory"));
const viewCategory = lazy(() => import("./views/apps/category/ViewCategory"));
const subCategory = lazy(() => import("./views/apps/category/SubCategory"));
const addSubCategory = lazy(() =>
  import("./views/apps/category/AddSubCategory")
);
const viewSubCategory = lazy(() =>
  import("./views/apps/category/ViewSubCategory")
);
const editSubCategory = lazy(() =>
  import("./views/apps/category/EditSubCategory")
);
const notificationList = lazy(() =>
  import("./views/apps/notification/NotificationList")
);
const pendingPaymentsList = lazy(() =>
  import("./views/apps/sellerPayout/pendingPayments/PendingPaymentsList")
);
const completedPaymentsList = lazy(() =>
  import("./views/apps/sellerPayout/pendingPayments/CompletedPaymentsList")
);
const viewCompletedPaymentsList = lazy(() =>
  import("./views/apps/sellerPayout/pendingPayments/ViewCompletedPayments")
);

const allOrder = lazy(() => import("./views/apps/order/AllOrder"));
const pendingOrder = lazy(() => import("./views/apps/order/PendingOrder"));
const orderDelivered = lazy(() => import("./views/apps/order/OrderDelivered"));
const cancelledOrder = lazy(() => import("./views/apps/order/CancelledOrder"));
const returnedOrder = lazy(() => import("./views/apps/order/ReturnedOrder"));

const createInvoice = lazy(() => import("./views/apps/billing/CreateInvoice"));
const invoiceList = lazy(() => import("./views/apps/billing/InvoiceList"));
// const invoiceSetting = lazy(() => import("./views/apps/order/InvoiceSetting"));
// const invoiceDesign = lazy(() => import("./views/apps/order/InvoiceDesign"));

const status = lazy(() => import("./views/apps/order/Status"));
const newPurchaseOrder = lazy(() =>
  import("./views/apps/purchase/NewPurchaseOrder")
);
const purchaseOrderList = lazy(() =>
  import("./views/apps/purchase/PurchaseOrderList")
);
const purchaseInvoiceList = lazy(() =>
  import("./views/apps/purchase/PurchaceInvoiceList")
);
const purchaseInvoice = lazy(() =>
  import("./views/apps/purchase/PurchaseInvoice")
);

const advertiesementList = lazy(() =>
  import("./views/apps/marketing/advertiesement/AdvertiesementList")
);
const addAdvertiesement = lazy(() =>
  import("./views/apps/marketing/advertiesement/AddAdvertiesement")
);
const editAdvertiesement = lazy(() =>
  import("./views/apps/marketing/advertiesement/EditAdvertiesement")
);
const viewAdvertiesement = lazy(() =>
  import("./views/apps/marketing/advertiesement/ViewAdvertiesement")
);

// const rolePermission = lazy(() => import("./views/apps/rolesAndPermission/Permission"));
const specialOfferList = lazy(() =>
  import("./views/apps/offerAndCoupon/specialOffer/SpecialOfferList")
);
const addSpecialOffer = lazy(() =>
  import("./views/apps/offerAndCoupon/specialOffer/AddSpecialOffer")
);
const editOffers = lazy(() =>
  import("./views/apps/offerAndCoupon/specialOffer/EditOffers")
);
const couponsList = lazy(() =>
  import("./views/apps/offerAndCoupon/coupons/couponsList")
);
const addCoupons = lazy(() =>
  import("./views/apps/offerAndCoupon/coupons/AddCoupons")
);

const churnRate = lazy(() => import("./views/apps/churnRate/ChurnRate"));
// const pendingPayment = lazy(() => import("./views/apps/pendingPayment/PendingPayment"));

const addSubscription = lazy(() =>
  import("./views/apps/subscription/AddSubscription")
);

const pageLayout = lazy(() => import("./views/apps/pageLayout/PageLayout"));
const stockReport = lazy(() => import("./views/apps/report/StockReport"));
const salesReport = lazy(() => import("./views/apps/report/SalesReport"));
const salesByCustomer = lazy(() =>
  import("./views/apps/sales/SalesByCustomer")
);
const addSalesByCust = lazy(() => import("./views/apps/sales/AddSalesByCust"));
// const editSalesByCust  = lazy(() => import("./views/apps/sales/EditSalesByCust"));
const viewSalesByCust = lazy(() =>
  import("./views/apps/sales/ViewSalesByCust")
);

const stockAdjustment = lazy(() =>
  import("./views/apps/stockControl/StockAdjustment")
);
const addStockAdjustment = lazy(() =>
  import("./views/apps/stockControl/AddStockAdjustment")
);
const stockTransferRequest = lazy(() =>
  import("./views/apps/stockControl/StockTransferRequest")
);
const addStockTransfer = lazy(() =>
  import("./views/apps/stockControl/AddStockTransfer")
);

const salesByitem = lazy(() => import("./views/apps/sales/SalesByItem"));
const addSalesByitem = lazy(() => import("./views/apps/sales/AddSalesByItem"));
const editSalesByitem = lazy(() =>
  import("./views/apps/sales/EditSalesByItem")
);
const viewSalesByitem = lazy(() =>
  import("./views/apps/sales/ViewSalesByItem")
);

const salesReturnHistory = lazy(() =>
  import("./views/apps/sales/SalesReturnHistory")
);
const addSalesReturnHis = lazy(() =>
  import("./views/apps/sales/AddSalesReturnHis")
);
// const editSalesReturnHis = lazy(()=> import("./views/apps/sales/EditSalesReturnHis"));
const viewSalesReturnHis = lazy(() =>
  import("./views/apps/sales/ViewSalesReturnHis")
);

const invoicedIncome = lazy(() => import("./views/apps/sales/InvoicedIncome"));
const addInvoicedIncome = lazy(() =>
  import("./views/apps/sales/AddInvoicedIncome")
);
const viewInvoicedIncome = lazy(() =>
  import("./views/apps/sales/ViewInvoicedIncome")
);

const activityLogs = lazy(() => import("./views/apps/activity/ActivityLogs"));
const addActivityLogs = lazy(() =>
  import("./views/apps/activity/AddActivityLogs")
);
const editActivityLogs = lazy(() =>
  import("./views/apps/activity/EditActivityLogs")
);
const viewActivityLogs = lazy(() =>
  import("./views/apps/activity/ViewActivityLogs")
);

const systemMails = lazy(() => import("./views/apps/activity/SystemMails"));
const addSystemMails = lazy(() =>
  import("./views/apps/activity/AddSystemMails")
);
const editSystemMails = lazy(() =>
  import("./views/apps/activity/EditSystemMails")
);
const viewSystemMails = lazy(() =>
  import("./views/apps/activity/ViewSystemMails")
);

const historyByProductCat = lazy(() =>
  import("./views/apps/byProduct/HistoryByProductCat")
);
const addHisByProCat = lazy(() =>
  import("./views/apps/byProduct/AddHisByProCat")
);
const editHisByProCat = lazy(() =>
  import("./views/apps/byProduct/EditHisByCat")
);
const viewHisByProCat = lazy(() =>
  import("./views/apps/byProduct/ViewHisByProCat")
);
const historyByProductTyp = lazy(() =>
  import("./views/apps/byProduct/HistoryByProductTyp")
);
const addHisByProTyp = lazy(() =>
  import("./views/apps/byProduct/AddHisByProTyp")
);
const editHisByProTyp = lazy(() =>
  import("./views/apps/byProduct/EditHisByProTyp")
);
const viewHisByProTyp = lazy(() =>
  import("./views/apps/byProduct/ViewHisByProTyp")
);

const mostViewProductReport = lazy(() =>
  import("./views/apps/report/MostViewProductReport")
);

const storesList = lazy(() => import("./views/apps/store/stores/StoresList"));
const addstores = lazy(() => import("./views/apps/store/stores/AddStores"));
const storesRequestList = lazy(() =>
  import("./views/apps/store/storesRequest/StoresRequestList")
);
const addStoresRequest = lazy(() =>
  import("./views/apps/store/storesRequest/AddStoresRequest")
);

const warehouseList = lazy(() =>
  import("./views/apps/warehouse/WarehouseList")
);
const addWarehouse = lazy(() => import("./views/apps/warehouse/AddWarehouse"));
const viewWarehouse = lazy(() =>
  import("./views/apps/warehouse/ViewWarehouse")
);
const editWarehouse = lazy(() =>
  import("./views/apps/warehouse/EditWarehouse")
);

const employeeList = lazy(() =>
  import("./views/apps/contactUs/employee/EmployeeList")
);
const addEmployee = lazy(() =>
  import("./views/apps/contactUs/employee/AddEmployee")
);
const editEmployee = lazy(() =>
  import("./views/apps/contactUs/employee/EditEmployee")
);
const customerList = lazy(() =>
  import("./views/apps/contactUs/customer/CustomerList")
);
const addCustomer = lazy(() =>
  import("./views/apps/contactUs/customer/AddCustomer")
);
const editCustomer = lazy(() =>
  import("./views/apps/contactUs/customer/EditCustomer")
);
const supplierList = lazy(() =>
  import("./views/apps/contactUs/supplier/SupplierList")
);
const addSupplier = lazy(() =>
  import("./views/apps/contactUs/supplier/AddSupplier")
);
const editSupplier = lazy(() =>
  import("./views/apps/contactUs/supplier/EditSupplier")
);

const importDemo = lazy(() =>
  import("./views/apps/helpAndSupport/importDemo/ImportDemo")
);

const Login = lazy(() => import("./views/pages/authentication/login/Login"));

const forgotPassword = lazy(() =>
  import("./views/pages/authentication/ForgotPassword")
);
const resetPassword = lazy(() =>
  import("./views/pages/authentication/ResetPassword")
);
const smsSetting = lazy(() => import("./views/apps/siteSetting/SMSSetting"));
const emailSetting = lazy(() =>
  import("./views/apps/siteSetting/EmailSetting")
);
const general = lazy(() => import("./views/apps/siteSetting/General"));
const userProfile = lazy(() => import("./views/pages/profile/UserProfile"));
const editStore = lazy(() => import("./views/apps/myStore/EditStore"));
const addMyStore = lazy(() => import("./views/apps/myStore/AddMyStore"));
const viewStore = lazy(() => import("./views/apps/myStore/ViewStore"));
const storeList = lazy(() => import("./views/apps/myStore/StoreList"));
const addStorePage = lazy(() => import("./views/apps/myStore/AddStorePage"));

const sliderList = lazy(() => import("./views/apps/slider/SliderList"));
const addSlider = lazy(() => import("./views/apps/slider/AddSlider"));

const editProfile = lazy(() => import("./views/apps/profile/EditProfile"));

//Theme Component starts from here
const userList = lazy(() => import("./views/apps/user/list/List"));
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"));
const userView = lazy(() => import("./views/apps/user/view/View"));
const email = lazy(() => import("./views/apps/email/Email"));
const chat = lazy(() => import("./views/apps/chat/Chat"));
const todo = lazy(() => import("./views/apps/todo/Todo"));
const calendar = lazy(() => import("./views/apps/calendar/Calendar"));
const shop = lazy(() => import("./views/apps/ecommerce/shop/Shop"));
const wishlist = lazy(() => import("./views/apps/ecommerce/wishlist/Wishlist"));
const checkout = lazy(() => import("./views/apps/ecommerce/cart/Cart"));
const productDetail = lazy(() =>
  import("./views/apps/ecommerce/detail/Detail")
);
const grid = lazy(() => import("./views/ui-elements/grid/Grid"));
const typography = lazy(() =>
  import("./views/ui-elements/typography/Typography")
);
const textutilities = lazy(() =>
  import("./views/ui-elements/text-utilities/TextUtilities")
);
const syntaxhighlighter = lazy(() =>
  import("./views/ui-elements/syntax-highlighter/SyntaxHighlighter")
);
const colors = lazy(() => import("./views/ui-elements/colors/Colors"));
const reactfeather = lazy(() =>
  import("./views/ui-elements/icons/FeatherIcons")
);
const basicCards = lazy(() => import("./views/ui-elements/cards/basic/Cards"));
const statisticsCards = lazy(() =>
  import("./views/ui-elements/cards/statistics/StatisticsCards")
);
const analyticsCards = lazy(() =>
  import("./views/ui-elements/cards/analytics/Analytics")
);
const actionCards = lazy(() =>
  import("./views/ui-elements/cards/actions/CardActions")
);
const Alerts = lazy(() => import("./components/reactstrap/alerts/Alerts"));
const Buttons = lazy(() => import("./components/reactstrap/buttons/Buttons"));
const Breadcrumbs = lazy(() =>
  import("./components/reactstrap/breadcrumbs/Breadcrumbs")
);
const Carousel = lazy(() =>
  import("./components/reactstrap/carousel/Carousel")
);
const Collapse = lazy(() =>
  import("./components/reactstrap/collapse/Collapse")
);
const Dropdowns = lazy(() =>
  import("./components/reactstrap/dropdowns/Dropdown")
);
const ListGroup = lazy(() =>
  import("./components/reactstrap/listGroup/ListGroup")
);
const Modals = lazy(() => import("./components/reactstrap/modal/Modal"));
const Pagination = lazy(() =>
  import("./components/reactstrap/pagination/Pagination")
);
const NavComponent = lazy(() =>
  import("./components/reactstrap/navComponent/NavComponent")
);
const Navbar = lazy(() => import("./components/reactstrap/navbar/Navbar"));
const Tabs = lazy(() => import("./components/reactstrap/tabs/Tabs"));
const TabPills = lazy(() =>
  import("./components/reactstrap/tabPills/TabPills")
);
const Tooltips = lazy(() =>
  import("./components/reactstrap/tooltips/Tooltips")
);
const Popovers = lazy(() =>
  import("./components/reactstrap/popovers/Popovers")
);
const Badge = lazy(() => import("./components/reactstrap/badge/Badge"));
const BadgePill = lazy(() =>
  import("./components/reactstrap/badgePills/BadgePill")
);
const Progress = lazy(() =>
  import("./components/reactstrap/progress/Progress")
);
const Media = lazy(() => import("./components/reactstrap/media/MediaObject"));
const Spinners = lazy(() =>
  import("./components/reactstrap/spinners/Spinners")
);
const Toasts = lazy(() => import("./components/reactstrap/toasts/Toasts"));
const avatar = lazy(() => import("./components/@vuexy/avatar/Avatar"));
const AutoComplete = lazy(() =>
  import("./components/@vuexy/autoComplete/AutoComplete")
);
const chips = lazy(() => import("./components/@vuexy/chips/Chips"));
const divider = lazy(() => import("./components/@vuexy/divider/Divider"));
const vuexyWizard = lazy(() => import("./components/@vuexy/wizard/Wizard"));
const listView = lazy(() => import("./views/ui-elements/data-list/ListView"));
const thumbView = lazy(() => import("./views/ui-elements/data-list/ThumbView"));
const select = lazy(() => import("./views/forms/form-elements/select/Select"));
const switchComponent = lazy(() =>
  import("./views/forms/form-elements/switch/Switch")
);
const checkbox = lazy(() =>
  import("./views/forms/form-elements/checkboxes/Checkboxes")
);
const radio = lazy(() => import("./views/forms/form-elements/radio/Radio"));
const input = lazy(() => import("./views/forms/form-elements/input/Input"));
const group = lazy(() =>
  import("./views/forms/form-elements/input-groups/InputGoups")
);
const numberInput = lazy(() =>
  import("./views/forms/form-elements/number-input/NumberInput")
);
const textarea = lazy(() =>
  import("./views/forms/form-elements/textarea/Textarea")
);
const pickers = lazy(() =>
  import("./views/forms/form-elements/datepicker/Pickers")
);
const inputMask = lazy(() =>
  import("./views/forms/form-elements/input-mask/InputMask")
);
const layout = lazy(() => import("./views/forms/form-layouts/FormLayouts"));
const formik = lazy(() => import("./views/forms/formik/Formik"));
const tables = lazy(() => import("./views/tables/reactstrap/Tables"));
const ReactTables = lazy(() =>
  import("./views/tables/react-tables/ReactTables")
);
const Aggrid = lazy(() => import("./views/tables/aggrid/Aggrid"));
const DataTable = lazy(() => import("./views/tables/data-tables/DataTables"));
const profile = lazy(() => import("./views/pages/profile/Profile"));
const faq = lazy(() => import("./views/pages/faq/FAQ"));
const knowledgeBase = lazy(() =>
  import("./views/pages/knowledge-base/KnowledgeBase")
);
const search = lazy(() => import("./views/pages/search/Search"));
const accountSettings = lazy(() =>
  import("./views/pages/account-settings/AccountSettings")
);
const invoice = lazy(() => import("./views/pages/invoice/Invoice"));
const comingSoon = lazy(() => import("./views/pages/misc/ComingSoon"));
const error404 = lazy(() => import("./views/pages/misc/error/404"));
const error500 = lazy(() => import("./views/pages/misc/error/500"));
const authorized = lazy(() => import("./views/pages/misc/NotAuthorized"));
const maintenance = lazy(() => import("./views/pages/misc/Maintenance"));
const apex = lazy(() => import("./views/charts/apex/ApexCharts"));
const chartjs = lazy(() => import("./views/charts/chart-js/ChartJS"));
const extreme = lazy(() => import("./views/charts/recharts/Recharts"));
const leafletMaps = lazy(() => import("./views/maps/Maps"));
const toastr = lazy(() => import("./extensions/toastify/Toastify"));
const sweetAlert = lazy(() => import("./extensions/sweet-alert/SweetAlert"));
const rcSlider = lazy(() => import("./extensions/rc-slider/Slider"));

const uploader = lazy(() => import("./extensions/dropzone/Dropzone"));
const editor = lazy(() => import("./extensions/editor/Editor"));
const drop = lazy(() => import("./extensions/drag-and-drop/DragAndDrop"));
const tour = lazy(() => import("./extensions/tour/Tour"));
const clipboard = lazy(() =>
  import("./extensions/copy-to-clipboard/CopyToClipboard")
);
const menu = lazy(() => import("./extensions/contexify/Contexify"));
const swiper = lazy(() => import("./extensions/swiper/Swiper"));
const i18n = lazy(() => import("./extensions/i18n/I18n"));
const reactPaginate = lazy(() => import("./extensions/pagination/Pagination"));
const tree = lazy(() => import("./extensions/treeview/TreeView"));
const Import = lazy(() => import("./extensions/import-export/Import"));
const Export = lazy(() => import("./extensions/import-export/Export"));
const ExportSelected = lazy(() =>
  import("./extensions/import-export/ExportSelected")
);
const lockScreen = lazy(() =>
  import("./views/pages/authentication/LockScreen")
);
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
);
const accessControl = lazy(() =>
  import("./extensions/access-control/AccessControl")
);

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout;
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            );
          }}
        </ContextLayout.Consumer>
      );
    }}
  />
);
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole,
  };
};
const AppRoute = connect(mapStateToProps)(RouteConfig);

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute path="/analyticsDashboard" component={analyticsDashboard} />
          <AppRoute
            path="/ecommerce-dashboard"
            component={ecommerceDashboard}
          />
          <AppRoute exact={true} path="/" component={home} fullLayout />
          {/* <AppRoute path="/pages/home" component={home} fullLayout /> */}
          {/* <AppRoute exact path="/seller-dashboard" component={sellerDashboard} /> */}
          {/* My components starts all my app components*/}
          <AppRoute path="/app/seller/sellerList" component={sellerList} />
          <AppRoute path="/app/seller/editSeller" component={editSeller} />
          <AppRoute path="/app/seller/viewSeller/:id" component={viewSeller} />
          <AppRoute path="/app/seller/addSeller" component={addSeller} />
          <AppRoute path="/app/users/user/allUsers" component={allUsers} />
          <AppRoute path="/app/users/user/addUsers" component={addUsers} />
          <AppRoute
            path="/app/users/user/viewUsers/:id"
            component={viewUsers}
          />
          <AppRoute
            path="/app/roleAndPermission/roleList"
            component={roleList}
          />
          <AppRoute path="/app/roleAndPermission/addRole" component={addRole} />
          <AppRoute
            path="/app/roleAndPermission/viewRole"
            component={viewRole}
          />
          {/* <AppRoute path="/app/roleAndPermission" component={rolePermission} /> */}
          <AppRoute
            path="/app/products/product/productsList"
            component={productsList}
          />
          <AppRoute
            path="/app/products/product/editProducts"
            component={editProducts}
          />
          <AppRoute
            path="/app/products/product/viewProducts/:id"
            component={viewProducts}
          />
          <AppRoute
            path="/app/products/product/addProducts"
            component={addProducts}
          />
          <AppRoute
            path="/app/products/product/addMyProduct"
            component={addMyProduct}
          />
          <AppRoute
            path="/app/products/brand/brandList"
            component={brandList}
          />
          <AppRoute path="/app/products/brand/addBrand" component={addBrand} />
          <AppRoute
            path="/app/products/brand/viewBrand/:id"
            component={viewBrand}
          />
          <AppRoute
            path="/app/products/brand/editBrand/:id"
            component={editBrand}
          />
          <AppRoute path="/app/products/unit/unitList" component={unitList} />
          <AppRoute path="/app/products/unit/addUnit" component={addUnit} />
          <AppRoute
            path="/app/products/unit/editUnit/:id"
            component={editUnit}
          />
          <AppRoute path="/app/products/coupon/coupon" component={coupon} />
          <AppRoute
            path="/app/products/coupon/addCoupon"
            component={addCoupon}
          />
          <AppRoute
            path="/app/category/categoryList"
            component={categoryList}
          />
          <AppRoute path="/app/category/addCategory" component={addCategory} />
          <AppRoute
            path="/app/category/editCategory/:id"
            component={editCategory}
          />
          <AppRoute
            path="/app/category/viewCategory/:id"
            component={viewCategory}
          />
          <AppRoute path="/app/category/subCategory" component={subCategory} />
          <AppRoute
            path="/app/category/addSubCategory"
            component={addSubCategory}
          />
          <AppRoute
            path="/app/category/viewSubCategory/:id"
            component={viewSubCategory}
          />
          <AppRoute
            path="/app/category/editSubCategory/:id"
            component={editSubCategory}
          />
          <AppRoute
            path="/app/notification/notificationList"
            component={notificationList}
          />
          <AppRoute
            path="/app/sellerPayout/pendingPayments/pendingPaymentsList"
            component={pendingPaymentsList}
          />
          <AppRoute
            path="/app/sellerPayout/pendingPayments/completedPaymentsList"
            component={completedPaymentsList}
          />
          <AppRoute
            path="/app/sellerPayout/pendingPayments/viewCompletedPaymentsList"
            component={viewCompletedPaymentsList}
          />
          <AppRoute path="/app/products/unit/unitList" component={unitList} />
          <AppRoute path="/app/products/unit/addUnit" component={addUnit} />
          <AppRoute
            path="/app/products/unit/editUnit/:id"
            component={editUnit}
          />
          <AppRoute path="/app/products/coupon" component={coupon} />
          <AppRoute path="/app/order/allorder" component={allOrder} />
          <AppRoute path="/app/order/pendingOrder" component={pendingOrder} />
          <AppRoute
            path="/app/order/orderDelivered"
            component={orderDelivered}
          />
          <AppRoute
            path="/app/order/cancelledOrder"
            component={cancelledOrder}
          />
          <AppRoute path="/app/order/returnedOrder" component={returnedOrder} />
          <AppRoute
            path="/app/billing/createInvoice"
            component={createInvoice}
          />
          <AppRoute path="/app/billing/invoiceList" component={invoiceList} />
          {/*<AppRoute path="/app/order/invoiceDesign" component={invoiceDesign} />
          <AppRoute
            path="/app/order/invoiceSetting"
            component={invoiceSetting}
          /> */}
          <AppRoute path="/app/order/status" component={status} />
          <AppRoute
            path="/app/purchase/newPurchaseOrder"
            component={newPurchaseOrder}
          />
          <AppRoute
            path="/app/purchase/purchaseOrderList"
            component={purchaseOrderList}
          />
          <AppRoute
            path="/app/purchase/purchaseInvoiceList"
            component={purchaseInvoiceList}
          />
          <AppRoute
            path="/app/purchase/purchaseInvoice"
            component={purchaseInvoice}
          />
          <AppRoute
            path="/app/marketing/advertiesement/advertiesementList"
            component={advertiesementList}
          />
          <AppRoute
            path="/app/marketing/advertiesement/addAdvertiesement"
            component={addAdvertiesement}
          />
          <AppRoute
            path="/app/marketing/advertiesement/editAdvertiesement"
            component={editAdvertiesement}
          />
          <AppRoute
            path="/app/marketing/advertiesement/viewAdvertiesement"
            component={viewAdvertiesement}
          />
          <AppRoute
            path="/app/offerAndCoupon/specialOffer/specialOfferList"
            component={specialOfferList}
          />
          <AppRoute
            path="/app/offerAndCoupon/specialOffer/addSpecialOffer"
            component={addSpecialOffer}
          />
          <AppRoute
            path="/app/offerAndCoupon/specialOffer/editOffers/:id"
            component={editOffers}
          />
          <AppRoute
            path="/app/offerAndCoupon/coupons/couponsList"
            component={couponsList}
          />
          <AppRoute
            path="/app/offerAndCoupon/coupons/addCoupons"
            component={addCoupons}
          />
          <AppRoute path="/app/churnRate/churnRate" component={churnRate} />
          {/* <AppRoute path="/app/pendingPayment/pendingPayment" component={pendingPayment} /> */}
          <AppRoute
            path="/app/subscription/addSubscription"
            component={addSubscription}
          />
          <AppRoute path="/app/report/stockReport" component={stockReport} />
          <AppRoute path="/app/report/salesReport" component={salesReport} />
          <AppRoute
            path="/app/report/mostViewProductReport"
            component={mostViewProductReport}
          />
          <AppRoute
            path="/app/sales/salesByCustomer"
            component={salesByCustomer}
          />
          <AppRoute
            path="/app/sales/addSalesByCust"
            component={addSalesByCust}
          />
          {/* <AppRoute path="/app/sales/editSalesByCust" component={editSalesByCust}/> */}
          <AppRoute
            path="/app/sales/viewSalesByCust"
            component={viewSalesByCust}
          />
          <AppRoute
            path="/app/stockControl/stockTransferRequest"
            component={stockTransferRequest}
          />
          <AppRoute
            path="/app/stockControl/addStockTransfer"
            component={addStockTransfer}
          />
          <AppRoute
            path="/app/stockControl/stockAdjustment"
            component={stockAdjustment}
          />
          <AppRoute
            path="/app/stockControl/addStockAdjustment"
            component={addStockAdjustment}
          />
          <AppRoute path="/app/sales/salesByitem" component={salesByitem} />
          <AppRoute
            path="/app/sales/addSalesByitem"
            component={addSalesByitem}
          />
          <AppRoute
            path="/app/sales/editSalesByitem"
            component={editSalesByitem}
          />
          <AppRoute
            path="/app/sales/viewSalesByitem"
            component={viewSalesByitem}
          />
          <AppRoute
            path="/app/sales/salesReturnHistory"
            component={salesReturnHistory}
          />
          <AppRoute
            path="/app/sales/addSalesReturnHis"
            component={addSalesReturnHis}
          />
          {/* <AppRoute path="/app/sales/editSalesReturnHis" component={editSalesReturnHis}/> */}
          <AppRoute
            path="/app/sales/viewSalesReturnHis"
            component={viewSalesReturnHis}
          />
          <AppRoute
            path="/app/sales/invoicedIncome"
            component={invoicedIncome}
          />
          <AppRoute
            path="/app/sales/addInvoicedIncome"
            component={addInvoicedIncome}
          />
          <AppRoute
            path="/app/sales/viewInvoicedIncome"
            component={viewInvoicedIncome}
          />
          <AppRoute
            path="/app/activity/activityLogs"
            component={activityLogs}
          />
          <AppRoute
            path="/app/activity/addActivityLogs"
            component={addActivityLogs}
          />
          <AppRoute
            path="/app/activity/editActivityLogs"
            component={editActivityLogs}
          />
          <AppRoute
            path="/app/activity/viewActivityLogs"
            component={viewActivityLogs}
          />
          <AppRoute path="/app/activity/systemMails" component={systemMails} />
          <AppRoute
            path="/app/activity/addSystemMails"
            component={addSystemMails}
          />
          <AppRoute
            path="/app/activity/editSystemMails"
            component={editSystemMails}
          />
          <AppRoute
            path="/app/activity/viewSystemMails"
            component={viewSystemMails}
          />
          <AppRoute
            path="/app/ByProduct/historyByProductCat"
            component={historyByProductCat}
          />
          <AppRoute
            path="/app/ByProduct/addHisByProCat"
            component={addHisByProCat}
          />
          <AppRoute
            path="/app/ByProduct/editHisByProCat"
            component={editHisByProCat}
          />
          <AppRoute
            path="/app/ByProduct/viewHisByProCat"
            component={viewHisByProCat}
          />
          <AppRoute
            path="/app/ByProduct/historyByProductTyp"
            component={historyByProductTyp}
          />
          <AppRoute
            path="/app/ByProduct/addHisByProTyp"
            component={addHisByProTyp}
          />
          <AppRoute
            path="/app/ByProduct/editHisByProTyp"
            component={editHisByProTyp}
          />
          <AppRoute
            path="/app/ByProduct/viewHisByProTyp"
            component={viewHisByProTyp}
          />
          <AppRoute
            path="/app/store/stores/storesList"
            component={storesList}
          />
          <AppRoute path="/app/store/stores/addstores" component={addstores} />
          <AppRoute
            path="/app/store/storesRequest/storesRequestList"
            component={storesRequestList}
          />
          <AppRoute
            path="/app/store/storesRequest/addStoresRequest"
            component={addStoresRequest}
          />
          <AppRoute path="/app/pageLayout/pageLayout" component={pageLayout} />
          <AppRoute path="/app/siteSetting/smsSetting" component={smsSetting} />
          <AppRoute
            path="/app/siteSetting/emailSetting"
            component={emailSetting}
          />
          <AppRoute path="/app/siteSetting/general" component={general} />
          <AppRoute
            path="/app/contactUs/employee/employeeList"
            component={employeeList}
          />
          <AppRoute
            path="/app/contactUs/employee/addEmployee"
            component={addEmployee}
          />
          <AppRoute
            path="/app/contactUs/employee/editEmployee"
            component={editEmployee}
          />
          <AppRoute
            path="/app/contactUs/customer/customerList"
            component={customerList}
          />
          <AppRoute
            path="/app/contactUs/customer/addCustomer"
            component={addCustomer}
          />
          <AppRoute
            path="/app/contactUs/customer/editCustomer/:id"
            component={editCustomer}
          />
          <AppRoute
            path="/app/contactUs/supplier/supplierList"
            component={supplierList}
          />
          <AppRoute
            path="/app/contactUs/supplier/addSupplier"
            component={addSupplier}
          />
          <AppRoute
            path="/app/contactUs/supplier/editSupplier/:id"
            component={editSupplier}
          />
          <AppRoute
            path="/app/helpAndSupport/importDemo/ImportDemo"
            component={importDemo}
          />
          <AppRoute
            path="/app/warehouse/warehouseList"
            component={warehouseList}
          />
          <AppRoute
            path="/app/warehouse/addWarehouse"
            component={addWarehouse}
          />
          <AppRoute
            path="/app/warehouse/viewWarehouse/:id"
            component={viewWarehouse}
          />
          <AppRoute
            path="/app/warehouse/editWarehouse/:id"
            component={editWarehouse}
          />
          <AppRoute path="/app/slider/sliderList" component={sliderList} />
          <AppRoute path="/app/slider/addSlider" component={addSlider} />
          <AppRoute path="/app/user/list" component={userList} />
          <AppRoute path="/app/user/edit" component={userEdit} />
          <AppRoute path="/app/user/view" component={userView} />
          <AppRoute path="/pages/login" component={Login} fullLayout />
          <AppRoute
            path="/pages/forgot-password"
            component={forgotPassword}
            fullLayout
          />
          <AppRoute
            path="/pages/reset-password"
            component={resetPassword}
            fullLayout
          />
          <AppRoute path="/pages/profile/userProfile" component={userProfile} />
          <AppRoute path="/app/myStore/editStore/:id" component={editStore} />
          <AppRoute path="/app/myStore/addMyStore" component={addMyStore} />
          <AppRoute path="/app/myStore/viewStore/:id" component={viewStore} />
          <AppRoute path="/app/myStore/storeList" component={storeList} />
          <AppRoute path="/app/myStore/addStorePage" component={addStorePage} />
          <AppRoute path="/app/profile/editProfile" component={editProfile} />
          {/* Theme Components Starts from here all the demo components*/}
          <AppRoute
            path="/email"
            exact
            component={() => <Redirect to="/email/inbox" />}
          />
          <AppRoute path="/email/:filter" component={email} />
          <AppRoute path="/chat" component={chat} />
          <AppRoute
            path="/todo"
            exact
            component={() => <Redirect to="/todo/all" />}
          />
          <AppRoute path="/todo/:filter" component={todo} />
          <AppRoute path="/calendar" component={calendar} />
          <AppRoute path="/ecommerce/shop" component={shop} />
          <AppRoute path="/ecommerce/wishlist" component={wishlist} />
          <AppRoute
            path="/ecommerce/product-detail"
            component={productDetail}
          />
          <AppRoute
            path="/ecommerce/checkout"
            component={checkout}
            permission="admin"
          />
          <AppRoute path="/data-list/list-view" component={listView} />
          <AppRoute path="/data-list/thumb-view" component={thumbView} />
          <AppRoute path="/ui-element/grid" component={grid} />
          <AppRoute path="/ui-element/typography" component={typography} />
          <AppRoute
            path="/ui-element/textutilities"
            component={textutilities}
          />
          <AppRoute
            path="/ui-element/syntaxhighlighter"
            component={syntaxhighlighter}
          />
          <AppRoute path="/colors/colors" component={colors} />
          <AppRoute path="/icons/reactfeather" component={reactfeather} />
          <AppRoute path="/cards/basic" component={basicCards} />
          <AppRoute path="/cards/statistics" component={statisticsCards} />
          <AppRoute path="/cards/analytics" component={analyticsCards} />
          <AppRoute path="/cards/action" component={actionCards} />
          <AppRoute path="/components/alerts" component={Alerts} />
          <AppRoute path="/components/buttons" component={Buttons} />
          <AppRoute path="/components/breadcrumbs" component={Breadcrumbs} />
          <AppRoute path="/components/carousel" component={Carousel} />
          <AppRoute path="/components/collapse" component={Collapse} />
          <AppRoute path="/components/dropdowns" component={Dropdowns} />
          <AppRoute path="/components/list-group" component={ListGroup} />
          <AppRoute path="/components/modals" component={Modals} />
          <AppRoute path="/components/pagination" component={Pagination} />
          <AppRoute path="/components/nav-component" component={NavComponent} />
          <AppRoute path="/components/navbar" component={Navbar} />
          <AppRoute path="/components/tabs-component" component={Tabs} />
          <AppRoute path="/components/pills-component" component={TabPills} />
          <AppRoute path="/components/tooltips" component={Tooltips} />
          <AppRoute path="/components/popovers" component={Popovers} />
          <AppRoute path="/components/badges" component={Badge} />
          <AppRoute path="/components/pill-badges" component={BadgePill} />
          <AppRoute path="/components/progress" component={Progress} />
          <AppRoute path="/components/media-objects" component={Media} />
          <AppRoute path="/components/spinners" component={Spinners} />
          <AppRoute path="/components/toasts" component={Toasts} />
          <AppRoute
            path="/extra-components/auto-complete"
            component={AutoComplete}
          />
          <AppRoute path="/extra-components/avatar" component={avatar} />
          <AppRoute path="/extra-components/chips" component={chips} />
          <AppRoute path="/extra-components/divider" component={divider} />
          <AppRoute path="/forms/wizard" component={vuexyWizard} />
          <AppRoute path="/forms/elements/select" component={select} />
          <AppRoute path="/forms/elements/switch" component={switchComponent} />
          <AppRoute path="/forms/elements/checkbox" component={checkbox} />
          <AppRoute path="/forms/elements/radio" component={radio} />
          <AppRoute path="/forms/elements/input" component={input} />
          <AppRoute path="/forms/elements/input-group" component={group} />
          <AppRoute
            path="/forms/elements/number-input"
            component={numberInput}
          />
          <AppRoute path="/forms/elements/textarea" component={textarea} />
          <AppRoute path="/forms/elements/pickers" component={pickers} />
          <AppRoute path="/forms/elements/input-mask" component={inputMask} />
          <AppRoute path="/forms/layout/form-layout" component={layout} />
          <AppRoute path="/forms/formik" component={formik} />{" "}
          <AppRoute path="/tables/reactstrap" component={tables} />
          <AppRoute path="/tables/react-tables" component={ReactTables} />
          <AppRoute path="/tables/agGrid" component={Aggrid} />
          <AppRoute path="/tables/data-tables" component={DataTable} />
          <AppRoute path="/pages/profile" component={profile} />
          <AppRoute path="/pages/faq" component={faq} />
          <AppRoute
            path="/pages/knowledge-base"
            component={knowledgeBase}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category"
            component={knowledgeBaseCategory}
            exact
          />
          <AppRoute
            path="/pages/knowledge-base/category/questions"
            component={knowledgeBaseQuestion}
          />
          <AppRoute path="/pages/search" component={search} />
          <AppRoute
            path="/pages/account-settings"
            component={accountSettings}
          />
          <AppRoute path="/pages/invoice" component={invoice} />
          <AppRoute
            path="/misc/coming-soon"
            component={comingSoon}
            fullLayout
          />
          <AppRoute path="/misc/error/404" component={error404} fullLayout />
          <AppRoute path="/pages/register" component={register} fullLayout />
          <AppRoute
            path="/pages/lock-screen"
            component={lockScreen}
            fullLayout
          />
          <AppRoute path="/misc/error/500" component={error500} fullLayout />
          <AppRoute
            path="/misc/not-authorized"
            component={authorized}
            fullLayout
          />
          <AppRoute
            path="/misc/maintenance"
            component={maintenance}
            fullLayout
          />
          <AppRoute path="/charts/apex" component={apex} />
          <AppRoute path="/charts/chartjs" component={chartjs} />
          <AppRoute path="/charts/recharts" component={extreme} />
          <AppRoute path="/maps/leaflet" component={leafletMaps} />
          <AppRoute path="/extensions/sweet-alert" component={sweetAlert} />
          <AppRoute path="/extensions/toastr" component={toastr} />
          <AppRoute path="/extensions/slider" component={rcSlider} />
          <AppRoute path="/extensions/file-uploader" component={uploader} />
          <AppRoute path="/extensions/wysiwyg-editor" component={editor} />
          <AppRoute path="/extensions/drag-and-drop" component={drop} />
          <AppRoute path="/extensions/tour" component={tour} />
          <AppRoute path="/extensions/clipboard" component={clipboard} />
          <AppRoute path="/extensions/context-menu" component={menu} />
          <AppRoute path="/extensions/swiper" component={swiper} />
          <AppRoute
            path="/extensions/access-control"
            component={accessControl}
          />
          <AppRoute path="/extensions/i18n" component={i18n} />
          <AppRoute path="/extensions/tree" component={tree} />
          <AppRoute path="/extensions/import" component={Import} />
          <AppRoute path="/extensions/export" component={Export} />
          <AppRoute
            path="/extensions/export-selected"
            component={ExportSelected}
          />
          <AppRoute path="/extensions/pagination" component={reactPaginate} />
          <AppRoute component={error404} fullLayout />
        </Switch>
      </Router>
    );
  }
}
export default AppRouter;
