#   s i m p l e - n o d e - i m p o r t  
  
 B a s i c   u s a g e :  
  
 # # #   i n d e x . j s  
  
 ` ` ` j a v a s c r i p t  
 c o n s t   m y D e b u g   =   r e q u i r e ( ' . / h e l p e r s / d e b u g g e r ' ) ;  
  
 m y D e b u g . l o g ( " L E T S   D E B U G   S O M E   S H ! T " ) ;  
 ` ` `  
  
 O u t p u t :  
  
 ` ` ` c o n s o l e  
  
 ` ` `  
  
  
  
 - - -  
  
  
  
 ` ` ` j a v a s c r i p t  
 c o n s t   m y D e b u g   =   r e q u i r e ( ' . / h e l p e r s / d e b u g g e r ' ) ;  
  
 m y D e b u g . o p t i o n s . d e b u g   =   t r u e ;  
  
 m y D e b u g . l o g ( " L E T S   D E B U G   S O M E   S H ! T " ) ;  
 ` ` `  
  
 O u t p u t :  
  
 ` ` ` c o n s o l e  
 L E T S   D E B U G   S O M E   S H ! T  
 ` ` `  
  
  
  
 - - -  
  
  
  
  
  
 ` ` ` j a v a s c r i p t  
 c o n s t   m y D e b u g   =   r e q u i r e ( ' . / h e l p e r s / d e b u g g e r ' ) ;  
  
 m y D e b u g . o p t i o n s . d e b u g   =   t r u e ;  
 m y D e b u g . o p t i o n s . f u l l D e b u g   =   t r u e ;  
  
 m y D e b u g . l o g ( " L E T S   D E B U G   S O M E   S H ! T " ) ;  
  
 ` ` `  
  
 O u t p u t :  
  
 ` ` ` c o n s o l e  
 L E T S   D E B U G   S O M E   S H ! T   { }  
 ` ` `  
  
 N o w   y o u   c a n   p a s s   i n   D a t a   t o   d i s p l a y   a s   w e l l :  
  
 ` ` ` j a v a s c r i p t  
 m y D e b u g . o p t i o n s . f u l l D e b u g   =   t r u e ;  
  
 c o n s t   h e l l o   =   {  
         n a m e :   " c o o p e r " ,  
         f a i l :   t r u e ,  
         a v a t a r :   " r e d - e g g - h e a d . p n g " ,  
         s k i l l _ l e v e l :   1 ,  
 }  
  
 m y D e b u g . l o g ( " L E T S   D E B U G   S O M E   S H ! T " ,   h e l l o ) ;  
 ` ` `  
  
 O u t p u t :  
  
 ` ` ` c o n s o l e  
 L E T S   D E B U G   S O M E   S H ! T   {                
     n a m e :   ' c o o p e r ' ,  
     f a i l :   t r u e ,  
     a v a t a r :   ' r e d - e g g - h e a d . p n g ' ,  
     s k i l l _ l e v e l :   1  
 }  
 ` ` `  
  
  
  
 Y o u   a l s o   c a n   d i s a b l e   ` f u l l D e b u g `   t o   h i d e   d a t a   a f t e r   d e e p   b u g   f i x i n g .   : h e h :  
  
 ` ` ` j a v s c r i p t  
 m y D e b u g . o p t i o n s . f u l l D e b u g   =   f a l s e ;  
  
 c o n s t   h e l l o   =   {  
         n a m e :   " c o o p e r " ,  
         f a i l :   t r u e ,  
         a v a t a r :   " r e d - e g g - h e a d . p n g " ,  
         s k i l l _ l e v e l :   1 ,  
 }  
  
 m y D e b u g . l o g ( " L E T S   D E B U G   S O M E   S H ! T " ,   h e l l o ) ;  
 ` ` `  
  
 O u t p u t :  
  
 ` ` ` c o n s o l e  
 L E T S   D E B U G   S O M E   S H ! T  
 ` ` `  
  
  
  
 - - -  
  
  
  
 * * T h i s   i s   n o t   a b o u t   t h e   d e b b u g e r ! * *  
  
 T h i s   i s   a   l i t t l e   e x a m p l e   h o w   y o u   c a n   i m p o r t   o w n - w r i t t e n   m o d u l e s   t h e   s i m p l e   w a y . 