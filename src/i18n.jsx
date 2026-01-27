import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    nav: {
                        home: "Home",
                        shop: "Shop",
                        pages: "Pages",
                        blog: "Blog",
                        welc: "Welcome",
                        contact: "Contact",
                        account: "Account",
                        wishlist: "Wishlist",
                        cart: "Cart",
                        deal: "Shop today's deal",
                        searchPlaceholder: "Search...",
                        all: "All Categories",
                        orderByPhone: "Order by phone:",
                        saleText: "Shop our Spring Bounty Sale",
                        profile: "Profile"
                    },

                    hero: {
                        sale1: "Sale Up To 30%",
                        title1: "Playstation Controller",
                        subtitle1: "Here’s a fresh take on an old favorite.",
                        shopNow: "Shop Now",
                        sale2: "Sale Up To 60%",
                        title2: "Bluetooth Speakers",
                        subtitle2: "Buy 2 wireless speakers, get 1 free sticker",
                        sale3: "Buy 2 Get 1 Free",
                        title3: "Women's Clothing Sale",
                        subtitle3: "Biggest promotion at the end of the year",
                    },

                    auth: {
                        login: "Sign In",
                        register: "Register",
                        logout: "Logout",
                        email: "Email",
                        password: "Password",
                        username: "Username",
                        fullName: "Full Name",
                        phoneNumber: "Phone Number",
                        createAccount: "Create Account",
                        cancel: "Cancel",
                        confirmPassword: "Confirm Password",
                        newPassword: "New Password",
                        forgotPassword: "Forgot Your Password?",
                        resetYourPassword: "Reset Your Password",
                        resetPassword: "Reset Password",
                        sendCode: "Send Code",
                        code: "Code",
                        sendAgain: "Didn’t get a code?Send again"
                    },

                    products: {
                        products: "Products",
                        product: "Product",
                        price: "Price",
                        quantity: "Quantity",
                        description: "Description",
                        category: "Category",
                        addToCart: "Add to Cart",
                        buyNow: "Buy Now",
                        outOfStock: "Out of Stock",
                        inStock: "In Stock"
                    },

                    cart: {
                        cart: "Cart",
                        myCart: "My Cart",
                        cartTotal: "Cart Total",
                        checkout: "Checkout",
                        remove: "Remove",
                        empty: "Your cart is currently empty.",
                        continueShopping: "Continue Shopping"
                    }
                }
            },
            ar: {
                translation: {
                    nav: {
                        home: "الرئيسية",
                        shop: "المتجر",
                        pages: "الصفحات",
                        blog: "المدونة",
                        welc: "مرحبا",
                        contact: "اتصل بنا",
                        account: "الحساب",
                        wishlist: "المفضلة",
                        cart: "السلة",
                        deal: "تسوق عروض اليوم",
                        searchPlaceholder: "ابحث...",
                        all: "جميع الفئات",
                        orderByPhone: "اطلب عبر الهاتف:",
                        saleText: "تسوق عروض الربيع",
                        profile: "الملف الشخصي"
                    },

                    hero: {
                        sale1: "خصم حتى 30%",
                        title1: "يد التحكم بلايستيشن",
                        subtitle1: "تصميم جديد لمفضل قديم",
                        shopNow: "تسوق الآن",

                        sale2: "خصم حتى 60%",
                        title2: "مكبرات صوت بلوتوث",
                        subtitle2: "اشترِ سماعتين لاسلكيتين واحصل على ملصق مجاني",

                        sale3: "اشترِ 2 واحصل على 1 مجاناً",
                        title3: "تخفيضات ملابس نسائية",
                        subtitle3: "أكبر عروض نهاية العام"
                    },

                    auth: {
                        login: "تسجيل الدخول",
                        register: "إنشاء حساب",
                        logout: "تسجيل الخروج",
                        email: "البريد الإلكتروني",
                        password: "كلمة المرور",
                        username: "اسم المستخدم",
                        fullName: "الاسم الكامل",
                        phoneNumber: "رقم الهاتف",
                        createAccount: "إنشاء حساب جديد",
                        cancel: "إلغاء",
                        confirmPassword: "تأكيد كلمة المرور",
                        newPassword: "كلمة المرور الجديدة",
                        forgotPassword: "نسيت كلمة المرور؟",
                        resetYourPassword: "إعادة تعيين كلمة المرور",
                        resetPassword: "إعادة تعيين",
                        sendCode: "إرسال الرمز",
                        code: "رمز التحقق",
                        sendAgain: "لم يصلك الرمز؟ أعد الإرسال"
                    },

                    products: {
                        products: "المنتجات",
                        product: "منتج",
                        price: "السعر",
                        quantity: "الكمية",
                        description: "الوصف",
                        category: "الفئة",
                        addToCart: "أضف إلى السلة",
                        buyNow: "اشترِ الآن",
                        outOfStock: "غير متوفر",
                        inStock: "متوفر"
                    },

                    cart: {
                        cart: "السلة",
                        myCart: "سلة التسوق",
                        cartTotal: "إجمالي السلة",
                        checkout: "الدفع",
                        remove: "حذف",
                        empty: "سلة التسوق فارغة حالياً.",
                        continueShopping: "متابعة التسوق"
                    }
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
    });
    export default i18n;
