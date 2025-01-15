import React, { useState, useMemo } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [formData, setFormData] = useState({
    answer_one: '',
    answer_two: '',
    answer_three: '',
    answer_four: '',
    answer_five: '',
    answer_six: '',
    answer_seven: '',
    answer_eight: '',
    answer_nine: '',
    answer_ten: '',
    answer_eleven: '',
    answer_twelve: '',
    answer_thirteen: '',
    answer_fourteen: '',
    answer_fifteen: '',
  });
  const [errors, setErrors] = useState({});
  const [right_answers, setRight_answers] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  }
  const getRandomNumber = (min, max) => {
    return Math.ceil(Math.random() * (max - min) + min)
  }
  
  let number_one = useMemo(
    () => getRandomNumber(1,9),
    [/* зависимость для запуска вычисления нового случайного значения */]
  );

  let number_two = useMemo(
    () => getRandomNumber(1,9),
    [/* зависимость для запуска вычисления нового случайного значения */]
  );

  let number_three = useMemo(
    () => getRandomNumber(1,9),
    [/* зависимость для запуска вычисления нового случайного значения */]
  );

  let number_four = useMemo(
    () => getRandomNumber(1,9),
    [/* зависимость для запуска вычисления нового случайного значения */]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    

    if (Object.keys(newErrors).length === 0) {
        // Form submission logic here
        console.log('Form submitted successfully!');
    } else {
        console.log('Form submission failed due to validation errors.');
        console.log(Object.keys(newErrors))
    }
  };

  const validateForm = (data) => {
  
    const errors = {};

    let answer_ok = 0

    let quastion_one = number_one * number_two
    let quastion_two = number_three * number_four
    const quastion_three = 90
    const quastion_four = 4
    const quastion_five = 668
    const quastion_six = 210
    const quastion_seven = 27
    const quastion_eight = 700
    const quastion_nine = 500
    const quastion_ten = 180
    const quastion_eleven = 2500
    const quastion_twelve = 4
    const quastion_thirteen = 16
      
    if (parseInt(data.answer_one) !== quastion_one) {
      errors.answer_one = "Неверно"
    } else {
      answer_ok += 1
    }


    if (parseInt(data.answer_two) !== quastion_two) {
      errors.answer_two = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_three) !== quastion_three) {
      errors.answer_three = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_four) !== quastion_four) {
      errors.answer_four = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_five) !== quastion_five) {
      errors.answer_five = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_six) !== quastion_six) {
      errors.answer_six = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_seven) !== quastion_seven) {
      errors.answer_seven = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_eight) !== quastion_eight) {
      errors.answer_eight = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_nine) !== quastion_nine) {
      errors.answer_nine = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_ten) !== quastion_ten) {
      errors.answer_ten = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_eleven) !== quastion_eleven) {
      errors.answer_eleven = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_twelve) !== quastion_twelve) {
      errors.answer_twelve = "Неверно"
    } else {
      answer_ok += 1
    }

    if (parseInt(data.answer_thirteen) !== quastion_thirteen) {
      errors.answer_thirteen = "Неверно"
    } else {
      answer_ok += 1
    }

    setRight_answers(answer_ok);
    console.log("Правильных ответов", answer_ok)
    return errors
  }

  const [message, setMessage] = useState( '' );
  

  return (
    <>
     
      <h1>Фундамент по математике для пятых классов</h1>
      <div className="card">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Фамилия и имя</label>
            <input type="name" className="form-control" id="exampleFormControlInput1" value={message} placeholder="Фамилия и имя" onChange={e => setMessage(e.target.value)}/>
        </div>
      </div>
      <p className="read-the-docs">
        Укажи фамилию и имя и приступай к заданию
      </p>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">
              Вопрос №1. Вычисли: {number_one} * {number_two}
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_one"
              value={formData.answer_one}
              onChange={handleChange}
            />
            {errors.answer_one && (
              <span className="error-message">
                {errors.answer_one}
              </span>
            )}
          </div>
          <div>
            <label className="form-label">
              Вопрос №2. Вычисли: {number_three} * {number_four}
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_two"
              value={formData.answer_two}
              onChange={handleChange}
            />
            {errors.answer_two && (
              <span className="error-message">
                {errors.answer_two}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №3. Вычисли: 36 + 54
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_three"
              value={formData.answer_three}
              onChange={handleChange}
            />
            {errors.answer_three && (
              <span className="error-message">
                {errors.answer_three}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №4. Вычисли: 48 : 12
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_four"
              value={formData.answer_four}
              onChange={handleChange}
            />
            {errors.answer_four && (
              <span className="error-message">
                {errors.answer_four}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №5. Вычисли: (268 + 179) + 221
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_five"
              value={formData.answer_five}
              onChange={handleChange}
            />
            {errors.answer_five && (
              <span className="error-message">
                {errors.answer_five}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №6. Вычисли: 30 * 70
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_six"
              value={formData.answer_six}
              onChange={handleChange}
            />
            {errors.answer_six && (
              <span className="error-message">
                {errors.answer_six}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №7. Вычисли: 114 – 87
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_seven"
              value={formData.answer_seven}
              onChange={handleChange}
            />
            {errors.answer_seven && (
              <span className="error-message">
                {errors.answer_seven}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №8. Вычисли: 25 · 7 · 4
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_eight"
              value={formData.answer_eight}
              onChange={handleChange}
            />
            {errors.answer_eight && (
              <span className="error-message">
                {errors.answer_eight}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №9. Переведи: 5 м = _______ см
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_nine"
              value={formData.answer_nine}
              onChange={handleChange}
            />
            {errors.answer_nine && (
              <span className="error-message">
                {errors.answer_nine}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №10. Переведи: 3 ч = _______ мин
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_ten"
              value={formData.answer_ten}
              onChange={handleChange}
            />
            {errors.answer_ten && (
              <span className="error-message">
                {errors.answer_ten}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №11. Переведи: 25 ц = _______ кг
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_eleven"
              value={formData.answer_eleven}
              onChange={handleChange}
            />
            {errors.answer_eleven && (
              <span className="error-message">
                {errors.answer_eleven}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №12. Переведи римскую цифру в десятичную систему счисления: IV
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_twelve"
              value={formData.answer_twelve}
              onChange={handleChange}
            />
            {errors.answer_twelve && (
              <span className="error-message">
                {errors.answer_twelve}
              </span>
            )}
          </div>

          <div>
            <label className="form-label">
              Вопрос №13. Переведи римскую цифру в десятичную систему счисления: XVI
            </label>
            <input
              className="form-input"
              type="text"
              name="answer_thirteen"
              value={formData.answer_thirteen}
              onChange={handleChange}
            />
            {errors.answer_thirteen && (
              <span className="error-message">
                {errors.answer_thirteen}
              </span>
            )}
          </div>

          

          <button className="submit-button" type="submit">Ответить</button>
          </form>
        </div>
        <div className="card">
          <div className="mb-3">
            <strong>{message}</strong>, твой результат - {right_answers}
          </div>
        </div>

        
        
    </>
  )
}

export default App


