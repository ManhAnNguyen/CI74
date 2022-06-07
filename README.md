js.

1. suwj khac biet giua var,let,const

- re-declare
- hoisting
- change value

2. co nhung cach nao de xu ly bat dong bo trong js

- bat dong bo la gi : set time out,call api,..

co 3 cach de xu li bat dong bo
2.1. callback
2.2. Promise
2.3. async await

3. HTML co fai ngon ngu lap trinh k? ko
4. == va === (ko ep buoc va ep buoc)
5. tham tri(nguyen thuy) va tham chieu(object)
6. 6 kieu du lieu co ban : number,string,boolean,null,undefined va object<object array function>
7. anonymous function (la function nhung ko co ten )

.css
1,css co fai ngon ngu lap trinh k (ko phai)
2,do uu tien trong css (inline style > id > class > tag )

react

1,su khac biet giua class component va functional component

- class co ham render con functional thi khong
- class co life cycle con functional thi khong(no sinh ra useEffect de thay the)
- class co ham constructor con functional thi khong
- class dung key word class es6 js de viet ra,conf functional thi dung tu khoa function or arrow function
- quan ly state : class dung this.state de quan ly state,con functional se dung hook cu the la useState

2.react la gi
-react la thu vien cua js,phat trien boi facebook,dung de xay dung UI(compoents)

3.life cycle la gi

co 3 trang thai : mounting,update,unmounting

mouting --> component sinh ra vao cay dom (componentdidmount)
update --> component dc update(thay doi state,..) (componentdidupdate)
unmounting --> component dc remove khoi cay dom (componentwillunmount)

useEffect(() => {

    //code here

return () => {
////
}
},[])

4.prop va state
state lm component re-render lai,con prop thi khong,
state dung cho 1 component(scope trong component do)
con props co the truyen cho nhung thang khac dung
