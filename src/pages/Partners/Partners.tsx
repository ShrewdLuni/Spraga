import { Layout } from "../../components/Layout"
import { Contact } from "../../components/Contact/Contact"
import { PartnersList } from "./components/PartnersList"

export const Partners = () => {
  var list = [
    {category : "Stores", isLeftDiraction:false, list : 
      [
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
      ]},
    {category : "Stores", isLeftDiraction:true, list : 
      [
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
        {src : "https://supplier.atbmarket.com/custom/themes/default/images/company_logo.png?v=7p-eCkidgF-pLB2eFUysMw"},
        {src : "https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png"},
      ]},
  ]




  return (
    <Layout>
      <PartnersList partners={list}/>
      <Contact/>
    </Layout>
    


    // <div className="flex overflow-hidden">
    //   <div className="flex gap-x-16">
    //     <img className="h-[160px] w-[300px]" loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUU35Pzsdzw-3Xd7BvdZPHa_K3wR6gvthMg&s" alt="" />
    //     <img className="h-[160px] w-[300px]" loading="lazy" src="https://img4.zakaz.ua/store_logos/og_novus.jpeg" alt="" />
    //     <img className="h-[160px] w-[300px]" loading="lazy" src="https://tvoya-opora.org/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjWEppZFdwcllqaHliekptWVc1b2JucG9aMlIyYkdjMmNHMTFZUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVFdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5aaGNuVnpYM05vWVhKcGJtY3VjRzVuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnlkMllYSjFjMTl6YUdGeWFXNW5MbkJ1WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraURtbHRZV2RsTDNCdVp3WTdCbFE2RVhObGNuWnBZMlZmYm1GdFpUb0tiRzlqWVd3PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9rZXkifX0=--125c550022d55d0c7300785502f685c769e4f979/varus_sharing.png" alt="" />
    //     <img className="h-[160px] w-[300px]" loading="lazy" src="https://zp.gov.ua/upload/post_image/o_1g048ilrtg99f0jeoe1laqenc1.png" alt="" />
    //   </div>
    // </div>


    // <Layout>
    //   <PartnersList partners={list}/>
    //   <Contact/>
    // </Layout>
  )
}