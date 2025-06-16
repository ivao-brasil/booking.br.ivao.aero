import { Translations } from "types/Translations";

const arTranslations: { translations: Translations } = {
  translations: {
    generics: {
      backToBeginning: 'الرجوع إلى البداية',
      back: 'الرجوع',
      soon: 'قريباً ...',
      see: 'أنظر'
    },
    footer: {
      copyrightMessage: '© 2021 International Virtual Aviation Organisation - IVAO Brazil. All Rights Reserved.',
      privacyPolicyName: 'Privacy Policy',
      termsOfUseName: 'Terms of Use',
    },
    beta: {
      title: 'النظام قيد التطوير',
      message: '𝗞𝗥𝗢𝗡𝗢𝗦 هو نظام تم إطلاقه مؤخرًا وهو قيد التطوير المستمر. نحن نعتمد عليك للإبلاغ عن أي أخطاء تجدونها 🐛.'
    },
    cookies: {
      title: 'نحن نسخدم الكوكيز لتحسين تجربتك بشكل أفضل',
      subtitle: 'نحن بحاجة الى إذنك للاستمرار في تحسين تجربتك الرائعة معنا',
      authorizeUse: 'السماح للكوكيز',
      continueWithout: 'الاستمرار دون استخدام الكوكيز',
    },
    errors: {
      general: {
        title: 'المعذرة توجد مشكلة',
        subtitle: 'نحن آسفون ، لكن أنظمتنا تشير إلى بعض الأعطال في كمبيوتر الملاحة. أعد تحميل الصفحة أو حاول مرة أخرى لاحقًا.',
      },
      notFound: {
        title: "المعذرة, هذه الصفحة غير موجودة",
        subtitle: 'يجرى التاكد من الرابط للوصول الى الصفحة المطلوبة لطفاً'
      },
      admin: {
        noAdmin: 'ليست لديك صلاحية الوصول',
        eventFinished: 'انتهى هذا الايفنت لا يمكنك تعديله',
        wrongDivision: 'هذا الايفنت ليس في قسمك',
        isActive: 'هذا الايفنت نشط الان, لايمكنك تعديله الان',
        updateAdmin: 'لا يمكنك تعديل مسؤول آخر',
        updateYourself: 'لا يمكنك تعديل نفسك !'
      },
      book: {
        suspended: 'أنت محظور من النظام ولا يمكنك الحجز.',
        notOwner: 'انت لست المسؤول عن هذه الرحلة المفتوحة',
        notActive: 'هذا الايفنت ليس نشط بعد !',
        tooEarly: 'لا يمكنك حجز هذه الرحلة المفتوحة الا قبل 7 ايام من الايفنت!',
        alreadyBusy: 'بالفعل لديك رحلة مفتوحة في نفس الوقت',
        hasStarted: 'لقد بدأ الايفنت بالفعل',
        hasEnded: 'لقد انتهى الايفنت',
        notFound: 'الرحلة المفتوحة غير موجودة',
        duplicateNumber: 'توجد بالفعل رحلة طيران بنفس رقم الرحلة الحالية !!',
        notPreBooked: 'لا يمكنك تأكيد حجز رحلة غير محجوزة بالاصل'
      },
      auth: {
        error: 'خطأ في مصادقة المستخدم.'
      },
      event: {
        notFound: 'الايفنت غير موجود'
      },
      scenery: {
        notFound: 'المطار غير موجود'
      },
      aircraft: {
        notFound: 'الطائرة غير موجودة'
      },
      user: {
        notFound: 'المستخدم غير موجود'
      },
      airport: {
        notFound: 'لم نتمكن من العثور على المطار الذي تحاول الطيران منه أو إليه. تحقق من رموز منظمة الطيران المدني الدولي وحاول مرة أخرى.'
      },
    },
    splash: {
      title: 'جرب أفضل ما تقدمه محاكاة الطيران!',
      subtitle: 'قم بإدارة حجوزاتك للطيران بطريقة حديثة وسريعة',
      explore: 'استكشف الرحلات!'
    },
    events: {
      found_zero: 'لا توجد ايفنتات هنا ، تحقق مرة أخرى لاحقًا.',
      found_one: '{{ count }} ايفنت',
      found_other: '{{ count }} ايفنتات',
      soon: 'قريباً...'
    },
    info: {
      pilotBriefing: {
        title: 'توجيهات للطيارين',
        description: 'توفر هذه الوثيقة إرشادات أو توجيهات للطيارين وطاقم الطائرة حول الإجراءات المحددة لهذا الايفنت. القراءة مطلوبة.',
      },
      atcBriefing: {
        title: 'توجيهات للمراقبين الجويين',
        description: 'توفر هذه الوثيقة إرشادات لمراقبي الحركة الجوية حول إجراءات محددة لهذا الايفنت. القراءة مطلوبة.',
      },
      sceneries: {
        title: 'ملفات المطارات',
        description: 'هنا يمكنك أن تجد ملفات المطارات الموصى بها لهذا الايفنت.',
        sims: {
          fs9: {
            description: 'Microsoft Flight Simulator 2004: A Century of Flight هي لعبة فيديو لمحاكاة الطيران تم إصدارها في 2003 ، وهي جزء من سلسلة ألعاب فيديو Microsoft Flight Simulator.'
          },
          fsx: {
            description: 'Microsoft Flight Simulator X هي لعبة فيديو لمحاكاة الطيران لعام 2006 تم تطويرها في الأصل بواسطة Aces Game Studio ونشرتها Microsoft Game Studios لـ Microsoft Windows.'
          },
          p3d: {
            description: 'Prepar3D  عبارة عن منصة محاكاة بصرية تتيح للمستخدمين إنشاء سيناريوهات طيران تدريب عبر مجالات الطيران والبحرية والأرض.'
          },
          msfs: {
            description: 'Microsoft Flight Simulator (المعروف باسم MS2020) هو محاكي طيران للهواة تم تطويره بواسطة Asobo Studio ونشره Xbox Game Studios. إنه إدخال في سلسلة Microsoft Flight Simulator التي بدأت في عام 1982 ، وسبقها Microsoft Flight Simulator X في عام 2006.'
          },
          xp11: {
            description: ' X-Plane هو محاكي واقعي نسبيا للطيران حيث يمكن للاعبين الجلوس وراء ضوابط أكثر من عشر طائرات (وبعض طائرات الهليكوبتر)، بدءا من الطائرات الخاصة البسيطة إلى طائرة بوينغ Boeing أو حتى طائرة حربية مزودة بصواريخ. يمكن للاعبين المشاركة في أكثر من 20 مهمة وتحدي حيث سيكون علديهم القيام بمهام مختلفة جدا'
          }
        },
      },
    },
    flights: {
      search: 'البحث عن الرحلات',
      arrivals: 'الوصول',
      departures: 'المغادرة',
      privateSlots: 'الرحلات المفتوحة',
      flightNumber: 'رقم الرحلة',
      eobt: 'وقت المغادرة',
      gate: 'البوابة',
      bookFlight: 'حجز الرحلة',
      loadMore: 'تحميل المزيد من الرحلات',
      filter: {
        call: 'فلتره الجدول',
        title: 'فلتره',
        aircraft: 'الطائرة',
        airline: 'الشركة/الخطوط',
        origin: 'الاصل',
        destination: 'الوجهه',
        showAvailableOnly: 'عرض الرحلات المتاحة فقط',
        reset: 'إعادة ضبط الفلتره',
        apply: 'تطبيق الفلتره'
      },
      error: {
        noFlightsFound: {
          title: 'لقد فات الوقت .. لايوجد رحلات للحجز',
          subtitle: 'قد لا تكون البيانات موجودة في نظامنا. تحقق من الفلتره المطبقة أو حاول مرة أخرى لاحقًا.'
        },
        unableToBook: {
          title: 'لا يمكننا حجز هذه الرحلة ...',
          subtitle: 'قد لا تكون البيانات موجودة في نظامنا ، أو تم حجز هذه الرحلة بالفعل من قبل طيار آخر.'
        },
      }
    },
    notification: {
      scheduleConfirmation: {
        title: 'هل أنت متأكد أنك تريد تحديد موعد هذه الرحلة؟',
        subtitle: 'قبل التأكيد ، ألق نظرة على التفاصيل وتأكد من أن هذه هي الرحلة التي تريدها.',
        alert: 'لا تعني الجدولة حجز رحلتك. تحتاج إلى تأكيد الجدول الزمني الخاص بك بين ثلاثة إلى سبعة أيام قبل الحدث. سيتم إلغاء جدولك الزمني إذا لم تؤكد ما لا يقل عن 72 ساعة قبل الرحلة.',
        button: 'جدوله'
      },
      scheduled: {
        title: 'الرحلة مجدولة',
        subtitle: 'تذكر: يجب عليك تأكيد الجدول الزمني بين ثلاثة إلى سبعة أيام قبل الحدث. سيتم إلغاء جدولك الزمني إذا لم تؤكد ما لا يقل عن 72 ساعة قبل الرحلة.'
      },
      booked: {
        title: 'الرحلة محجوزة',
        subtitle: 'تم تأكيد رحلتك بنجاح. جهز خطة رحلتك وطائرتك ، وتأكد من التزامك بالتوقيت ورقم البوابة ، والأهم من ذلك كله: استمتع!',
      },
      cancelled: {
        title: 'اًلغيت جدولة الرحلة',
        subtitle: 'تم إلغاء جدولة رحلتك. نحن آسفون لرحيلك ...'
      }
    },
    myFlights: {
      title: 'رحلاتي',
      subtitle: 'رؤية الجدول الزمني للرحلات الخاص بك بأكمله',
      search: 'ايجاد رحلة مجدولة مسبقاً',
      pilotBriefing: {
        title: 'توجيهات الطياريين',
        description: 'توفر هذه الوثيقة إرشادات للطيارين وطاقم الطائرة حول الإجراءات المحددة لهذا الحدث. القراءة مطلوبة.',
      },
      boardingPass: {
        cancelFlight: 'الغاء الرحلة',
        cancelFlightConfirmation: 'هل انت متاكد من الغاء الرحلة ؟',
        confirmFlight: 'تأكيد الرحلة',
        disclaimer: 'للطيران في هذا الايفنت ، يجب عليك الامتثال لجميع التعليمات أو التوجيهات المتاحة في توجيهات الطياريين.',
        waitToConfirm: 'انتظر لتأكيد الرحلة'
      }
    },
    sidebarPanel: {
      information: 'معلومات عامة',
      flights: 'البحث عن الرحلات',
      myFlights: 'رحلاتي',
      changeTheme: 'تغيير شكل الموقع',
      logout: 'تسجيل الخروج',
      eventsHome: 'الذهاب الى قائمة الايفنتات'
    }
  },
};

export default arTranslations;
