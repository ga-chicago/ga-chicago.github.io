(define F*
  (lambda (func-arg)
    (lambda (n)
      (if (zero? n)
          1
          (* n (func-arg (- n 1)))))))

(define M
  (lambda (func-arg)
      (lambda (l)
      (if (null? l)
          'no-list
          (if (null? (cdr l))
              (car l)
              (max (car l) (func-arg (cdr l))))))))

; The Y Combinatoooooooooorrrrrrr
(define Y
  (lambda (X)
    ((lambda (p)
       (X (lambda (arg) ((p p) arg))))
     (lambda (p)
       (X (lambda (arg) ((p p) arg)))))))

(define fact (Y F*))
(define find-max (Y M))
