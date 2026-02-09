export function renderRulesPage(mainEl) {
  mainEl.innerHTML = `
    <nav class="navbar navbar-expand-lg sticky-top shadow-sm">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">Canastify</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto gap-lg-3">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Начало</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="game.html">Игра</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="rules.html">Правила</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="profile.html">Профил</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="admin.html" data-role="admin">Админ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="rules-wrap py-5">
      <div class="container" style="max-width: 1200px">
        <div class="mb-4">
          <h1 class="display-5 fw-bold mb-2">Правила на Българската канаста</h1>
          <p class="lead text-secondary">Пълен и подробен правилник за Canastify</p>
        </div>

        <!-- Tabs -->
        <div class="tabs mb-4">
          <button type="button" class="tab-button is-active" data-tab="rules">
            <i class="bi bi-journal-text"></i> Правила
          </button>
          <button type="button" class="tab-button" data-tab="faq">
            <i class="bi bi-question-circle"></i> FAQ
          </button>
        </div>

        <!-- Tab: Rules -->
        <div class="tab-panel is-active" data-tab-panel="rules">
          <div class="row g-4">
            <div class="col-lg-3 d-none d-lg-block">
              <div class="toc-sticky">
                <h5 class="mb-3 fw-bold">Съдържание</h5>
                <nav class="toc">
                  <a href="#overview" class="toc-link">Общ преглед</a>
                  <a href="#teams" class="toc-link">Играчи и отбори</a>
                  <a href="#cards" class="toc-link">Картите</a>
                  <a href="#goal" class="toc-link">Цел</a>
                  <a href="#dealing" class="toc-link">Раздаване</a>
                  <a href="#turn" class="toc-link">Ход на играча</a>
                  <a href="#melds" class="toc-link">Комбинации</a>
                  <a href="#wild" class="toc-link">Wild карти</a>
                  <a href="#canasta" class="toc-link">Канаста</a>
                  <a href="#take-pile" class="toc-link">Взимане на купа</a>
                  <a href="#opening" class="toc-link">Отваряне</a>
                  <a href="#closing" class="toc-link">Затваряне</a>
                  <a href="#scoring" class="toc-link">Точкуване</a>
                </nav>
              </div>
            </div>

            <div class="col-lg-9">
              <!-- Overview -->
              <section class="mb-5" id="overview">
                <h2 class="fw-bold mb-3">1. Общ преглед на играта</h2>
                <p class="text-secondary">
                  <strong>Българска канаста</strong> е отборна картова игра за четирима играчи, която се играе в поредица от раздавания. Играчите свалят комбинации от карти (meld), трупат точки за отбора си и стратегически решават кога да затворят раздаването.
                </p>
                <div class="callout callout--info">
                  <strong>Цел на играта:</strong> Отборът трябва да достигне <strong>10 000 точки</strong>.
                </div>
              </section>

              <!-- Teams -->
              <section class="mb-5" id="teams">
                <h2 class="fw-bold mb-3">2. Играчи и отбори</h2>
                <ul class="text-secondary">
                  <li>Участват <strong>точно 4 играчи</strong>.</li>
                  <li>Те образуват <strong>2 отбора по 2</strong>, като партньорите седят един срещу друг.</li>
                  <li><strong>Всички точки се трупат на отборно ниво</strong>.</li>
                </ul>
              </section>

              <!-- Cards -->
              <section class="mb-5" id="cards">
                <h2 class="fw-bold mb-3">3. Картите</h2>
                <details class="acc">
                  <summary>Състав и видове карти</summary>
                  <div class="acc-content">
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Компонент</th>
                            <th>Брой</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Стандартни тестета</td>
                            <td>2 × 52 = 104</td>
                          </tr>
                          <tr>
                            <td>Жокери</td>
                            <td>6</td>
                          </tr>
                          <tr class="fw-bold bg-light">
                            <td>Общо карти</td>
                            <td>110</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5 class="mt-3 mb-2 fw-semibold">Видове карти и тяхна роля</h5>
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Карта</th>
                            <th>Описание</th>
                            <th>Роля</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Жокер</strong></td>
                            <td>Wild карта</td>
                            <td>Замества всяка карта</td>
                          </tr>
                          <tr>
                            <td><strong>2</strong></td>
                            <td>Wild карта</td>
                            <td>Замества всяка карта</td>
                          </tr>
                          <tr>
                            <td><strong>♦3, ♥3</strong></td>
                            <td>Червени тройки</td>
                            <td>Бонус при отваряне</td>
                          </tr>
                          <tr>
                            <td><strong>♣3, ♠3</strong></td>
                            <td>Черни тройки</td>
                            <td>Специални правила</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Goal -->
              <section class="mb-5" id="goal">
                <h2 class="fw-bold mb-3">4. Цел на играта</h2>
                <ul class="text-secondary">
                  <li>Целта е отборът да достигне <strong>10 000 точки</strong>.</li>
                  <li>Точките се броят <strong>само след края на раздаване</strong>.</li>
                  <li>Резултатът на отбор може да бъде и <strong>отрицателен</strong>.</li>
                </ul>
              </section>

              <!-- Dealing -->
              <section class="mb-5" id="dealing">
                <h2 class="fw-bold mb-3">5. Раздаване</h2>
                <details class="acc">
                  <summary>Процес на раздаване и червени тройки</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Начало</h5>
                    <ul class="text-secondary">
                      <li>Всеки играч получава <strong>13 карти</strong> в ръка.</li>
                      <li><strong>Червените тройки (♦3, ♥3)</strong> се свалят отделно и <strong>не се броят</strong> за карти в ръка.</li>
                    </ul>
                    <h5 class="mt-3 mb-2 fw-semibold">Червени тройки</h5>
                    <p class="text-secondary">
                      Преди да започне играта всеки играч сваля всички червени тройки. За всяка свалена червена тройка той тегли 1 карта от тестето. Ако тя отново е червена тройка – сваля я и тегли отново.
                    </p>
                    <h5 class="mt-3 mb-2 fw-semibold">Първа карта на купа</h5>
                    <p class="text-secondary">
                      След приключване, най-горната карта от тестето се обръща и става първата карта на купа (discard pile).
                    </p>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Turn -->
              <section class="mb-5" id="turn">
                <h2 class="fw-bold mb-3">6. Ход на играча</h2>
                <details class="acc open">
                  <summary>Фази на хода и задължително хвърляне</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Фази на хода</h5>
                    <p class="text-secondary">Всеки ход се състои от:</p>
                    <ol class="text-secondary">
                      <li><strong>DRAW</strong> – теглене от тестето или взимане на купа.</li>
                      <li><strong>PLAY</strong> – сваляне/добавяне на meld-ове (възможно е Undo).</li>
                      <li><strong>DISCARD</strong> – хвърляне на точно 1 карта в купа.</li>
                    </ol>
                    <div class="callout callout--warning">
                      <strong>Няма затваряне без хвърляне!</strong> Всеки ход завършва с точно една карта в купа.
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Melds -->
              <section class="mb-5" id="melds">
                <h2 class="fw-bold mb-3">7. Комбинации (Meld)</h2>
                <details class="acc">
                  <summary>Сет и Run</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Сет (еднакви карти)</h5>
                    <ul class="text-secondary">
                      <li>Минимум <strong>3 карти с еднакъв ранг</strong>.</li>
                      <li>Всички сетове от един и същи ранг се сливат в един.</li>
                      <li>Пример: 10♣ - 10♦ - 10♥ - 10♠</li>
                    </ul>
                    <h5 class="mt-3 mb-2 fw-semibold">Run (поредни карти)</h5>
                    <ul class="text-secondary">
                      <li>Минимум <strong>3 поредни карти от една боя</strong>.</li>
                      <li><strong>3 не участва</strong> в run.</li>
                      <li>Разрешени стойности: <strong>от 4 до A</strong> (A е валидно само след K).</li>
                      <li><strong>9 не може да бъде начало или край</strong> на готов run от 7 карти.</li>
                    </ul>
                    <div class="callout callout--warning">
                      <strong>Посока на строене:</strong> Run може да бъде възходящ или низходящ, но посоката се определя при започване и не може да се променя.
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Wild -->
              <section class="mb-5" id="wild">
                <h2 class="fw-bold mb-3">8. Wild карти</h2>
                <details class="acc">
                  <summary>Ограничения и правила за wild карти</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Що е wild карта</h5>
                    <p class="text-secondary">За wild карта се счита:</p>
                    <ul class="text-secondary">
                      <li>Жокер</li>
                      <li>Двойка (2)</li>
                    </ul>
                    <div class="callout callout--warning">
                      <strong>Максимум 3 wild в комбинация:</strong> В една комбинация (meld / canasta) могат да участват максимум 3 wild карти.
                    </div>
                    <h5 class="mt-3 mb-2 fw-semibold">Мръсна комбинация (mixed meld)</h5>
                    <ul class="text-secondary">
                      <li>Мръсна комбинация <strong>не може да започне</strong> с wild карта.</li>
                      <li>Преди първата wild карта трябва да има <strong>минимум 2 оригинални карти</strong>.</li>
                      <li>Мръсна канаста съдържа <strong>точно 7 карти</strong>, от които <strong>най-малко 4 са оригинални</strong>.</li>
                    </ul>
                    <p class="text-secondary fw-semibold mt-3">Главно правило:</p>
                    <div class="callout callout--info">
                      <strong>Броят на последователните wild карти трябва винаги да е строго по-малък от броя на непосредствено предхождащите ги оригинални карти.</strong>
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Canasta -->
              <section class="mb-5" id="canasta">
                <h2 class="fw-bold mb-3">9. Канаста</h2>
                <details class="acc">
                  <summary>Видове канасти и правила</summary>
                  <div class="acc-content">
                    <p class="text-secondary">
                      <strong>Канаста</strong> = комбинация от <strong>7 карти</strong>.
                    </p>
                    <h5 class="mt-3 mb-2 fw-semibold">Видове канасти</h5>
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Вид</th>
                            <th>Описание</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Чиста</strong></td>
                            <td>Без wild карти</td>
                          </tr>
                          <tr>
                            <td><strong>Мръсна</strong></td>
                            <td>С wild карти</td>
                          </tr>
                          <tr>
                            <td><strong>Wild канаста</strong></td>
                            <td>Само от жокери и/или двойки</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5 class="mt-3 mb-2 fw-semibold">След 7 карти</h5>
                    <ul class="text-secondary">
                      <li>След като стане канаста, <strong>не могат да се добавят wild</strong>.</li>
                      <li>Могат да се добавят само оригинални карти.</li>
                      <li>Към wild канаста <strong>не се добавя нищо</strong>.</li>
                    </ul>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Take Pile -->
              <section class="mb-5" id="take-pile">
                <h2 class="fw-bold mb-3">10. Взимане на купа</h2>
                <details class="acc">
                  <summary>Ключове и блокиране</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Начини за взимане</h5>
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Тип ключ</th>
                            <th>Условие</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Сет-ключ</strong></td>
                            <td>2 карти със същия ранг</td>
                          </tr>
                          <tr>
                            <td><strong>Run-ключ</strong></td>
                            <td>2 поредни карти от една боя</td>
                          </tr>
                          <tr>
                            <td><strong>Wild-ключ</strong></td>
                            <td>5 wild карти</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5 class="mt-3 mb-2 fw-semibold">Блокиране</h5>
                    <ul class="text-secondary">
                      <li><strong>Червена 3:</strong> Блокира купа за следващите 3 играча.</li>
                      <li><strong>Черна 3:</strong> Ако е най-горе, следващият играч не може да вземе купа.</li>
                    </ul>
                    <div class="callout callout--warning">
                      <strong>Червена 3 блокира купа за следващите 3 играча!</strong>
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Opening -->
              <section class="mb-5" id="opening">
                <h2 class="fw-bold mb-3">11. Отваряне</h2>
                <details class="acc">
                  <summary>Условия за отваряне и OPENING_THRESHOLD</summary>
                  <div class="acc-content">
                    <p class="text-secondary">
                      <strong>Отваряне</strong> е моментът, в който отборът за първи път в текущото раздаване успешно сваля комбинации на масата.
                    </p>
                    <h5 class="mt-3 mb-2 fw-semibold">Минимални точки за отваряне</h5>
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Резултат на отбора</th>
                            <th>Минимум (OPENING_THRESHOLD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>под 2495 (вкл. отрицателен)</strong></td>
                            <td><strong>60</strong></td>
                          </tr>
                          <tr>
                            <td>2500 - 4995</td>
                            <td>90</td>
                          </tr>
                          <tr>
                            <td>5000 - 7495</td>
                            <td>120</td>
                          </tr>
                          <tr>
                            <td>7500+</td>
                            <td>150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="callout callout--warning">
                      <strong>Ако не е покрит OPENING_THRESHOLD:</strong> discard е забранен. Използвайте Undo, за да върнете свалените карти и да продължите хода с само discard.
                    </div>
                    <h5 class="mt-3 mb-2 fw-semibold">Opening-валиден meld</h5>
                    <p class="text-secondary">
                      За да се счита, че отборът е отворил, трябва да има поне един meld, който е opening-валиден:
                    </p>
                    <ul class="text-secondary">
                      <li><strong>Natural meld:</strong> поне 3 natural карти в поредност (set или run).</li>
                      <li><strong>Wild-only meld:</strong> минимум 3 wild карти (2 и/или жокери).</li>
                    </ul>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Closing -->
              <section class="mb-5" id="closing">
                <h2 class="fw-bold mb-3">12. Затваряне (край на раздаване)</h2>
                <details class="acc">
                  <summary>Видове затваряне и специални случаи</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Затваряне „на плюс"</h5>
                    <ul class="text-secondary">
                      <li>Условие: Отборът има поне <strong>една канаста</strong>.</li>
                      <li>Ефект: Свалените meld-ове се броят <strong>на плюс</strong>.</li>
                      <li>Картите, останали в ръка, се броят <strong>на минус</strong>.</li>
                      <li>Бонус за затваряне: <strong>+100 точки</strong>.</li>
                    </ul>
                    <h5 class="mt-3 mb-2 fw-semibold">Затваряне „на минус"</h5>
                    <ul class="text-secondary">
                      <li>Сценарий: Отборът <strong>отваря и затваря в един ход</strong>, но <strong>няма канаста</strong>.</li>
                      <li>Ефект: <strong>Всички свалени meld-ове</strong> и карти се броят <strong>на минус</strong>.</li>
                      <li>Бонус за затваряне: <strong>+100 точки</strong>.</li>
                    </ul>
                    <div class="callout callout--info">
                      <strong>Без канаста няма положителен резултат:</strong> За да получите положителен резултат, трябва да имате поне една канаста при затварянето.
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>

              <!-- Scoring -->
              <section class="mb-5" id="scoring">
                <h2 class="fw-bold mb-3">13. Точкуване</h2>
                <details class="acc">
                  <summary>Стойности на картите и бонуси</summary>
                  <div class="acc-content">
                    <h5 class="mb-2 fw-semibold">Стойности на картите</h5>
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Карта</th>
                            <th>Точки</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Жокер</strong></td>
                            <td><strong>50</strong></td>
                          </tr>
                          <tr>
                            <td><strong>2 и A</strong></td>
                            <td><strong>20</strong></td>
                          </tr>
                          <tr>
                            <td><strong>8 - K</strong></td>
                            <td><strong>10</strong></td>
                          </tr>
                          <tr>
                            <td><strong>4 - 7</strong></td>
                            <td><strong>5</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h5 class="mt-3 mb-2 fw-semibold">Бонуси за канасти</h5>
                    <div class="table-scroll">
                      <table class="table table-sm">
                        <thead>
                          <tr>
                            <th>Канаста</th>
                            <th>Точки</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Чиста от аса или 2</strong></td>
                            <td><strong>1000</strong></td>
                          </tr>
                          <tr>
                            <td><strong>Чиста от други</strong></td>
                            <td><strong>500</strong></td>
                          </tr>
                          <tr>
                            <td><strong>Мръсна</strong></td>
                            <td><strong>300</strong></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                      <i class="bi bi-arrow-up"></i> Към началото
                    </a>
                  </div>
                </details>
              </section>
            </div>
          </div>
        </div>

        <!-- Tab: FAQ -->
        <div class="tab-panel" data-tab-panel="faq">
          <div class="row g-4">
            <div class="col-lg-9 mx-auto">
              <details class="acc">
                <summary>1. Как протича един ход?</summary>
                <div class="acc-content">
                  <p class="text-secondary">
                    Всеки ход има <strong>3 фази</strong>:
                  </p>
                  <ol class="text-secondary">
                    <li><strong>DRAW</strong> – теглене от тестето или взимане на купа (ако е позволено).</li>
                    <li><strong>PLAY</strong> – сваляне/добавяне на meld-ове (възможно е Undo).</li>
                    <li><strong>DISCARD</strong> – хвърляне на точно 1 карта в купа.</li>
                  </ol>
                  <p class="text-secondary"><strong>Без discard ходът НЕ може да приключи.</strong></p>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>2. Какво означава „отваряне"?</summary>
                <div class="acc-content">
                  <p class="text-secondary">
                    Отборът „отваря", когато <strong>за първи път в раздаването</strong> свали meld-ове, които:
                  </p>
                  <ul class="text-secondary">
                    <li>покриват <strong>OPENING_THRESHOLD</strong> (точки от meld-ове в текущия ход);</li>
                    <li>съдържат <strong>поне един opening-валиден meld</strong>.</li>
                  </ul>
                  <p class="text-secondary"><strong>Отварянето е отборно</strong> – ако един играч отвори, отборът е отворил.</p>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>3. Какъв е OPENING_THRESHOLD?</summary>
                <div class="acc-content">
                  <p class="text-secondary">Зависи от точките на отбора преди раздаването:</p>
                  <div class="table-scroll">
                    <table class="table table-sm">
                      <thead>
                        <tr>
                          <th>Точки на отбора</th>
                          <th>Праг</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>≤ 2495 (вкл. отрицателни)</td>
                          <td><strong>60</strong></td>
                        </tr>
                        <tr>
                          <td>2500 – 4995</td>
                          <td><strong>90</strong></td>
                        </tr>
                        <tr>
                          <td>5000 – 7495</td>
                          <td><strong>120</strong></td>
                        </tr>
                        <tr>
                          <td>≥ 7500</td>
                          <td><strong>150</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p class="text-secondary mt-2"><strong>Точките се броят преди discard.</strong></p>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>4. Какво е opening-валиден meld?</summary>
                <div class="acc-content">
                  <p class="text-secondary">Нужно е <strong>поне един</strong> от следните в opening package:</p>
                  <h5 class="mt-2 mb-2 fw-semibold">A) Natural meld</h5>
                  <ul class="text-secondary">
                    <li><strong>Set</strong>: ≥ 3 еднакви natural карти (напр. 5-5-5)</li>
                    <li><strong>Run</strong>: ≥ 3 последователни natural карти от една боя (напр. 7♥-8♥-9♥)</li>
                  </ul>
                  <p class="text-secondary fw-semibold">👉 Wild карти <strong>НЕ се броят</strong> за тези 3.</p>
                  <h5 class="mt-2 mb-2 fw-semibold">B) Wild-only meld</h5>
                  <ul class="text-secondary">
                    <li>≥ 3 wild карти (2 и/или жокери) в един meld.</li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>5. Какво става, ако сваля meld-ове, но не стигна прага?</summary>
                <div class="acc-content">
                  <ul class="text-secondary">
                    <li><strong>Не можеш да хвърлиш (discard)</strong>.</li>
                    <li>Имаш два избора:
                      <ul>
                        <li>да свалиш още meld-ове, докато стигнеш прага;</li>
                        <li>да използваш <strong>Undo</strong>.</li>
                      </ul>
                    </li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>6. Как работи Undo?</summary>
                <div class="acc-content">
                  <ul class="text-secondary">
                    <li>Undo връща <strong>всички meld-ове</strong>, свалени <strong>в текущия ход</strong>, обратно в ръката.</li>
                    <li>НЕ връща тегленето.</li>
                    <li>Възможно е <strong>само преди discard</strong>.</li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>7. Какви видове meld-ове има?</summary>
                <div class="acc-content">
                  <ul class="text-secondary">
                    <li><strong>Set</strong> – еднакъв ранг (мин. 3 карти).</li>
                    <li><strong>Run</strong> – поредни карти от една боя (мин. 3).</li>
                    <li><strong>Mixed (мръсен)</strong> – с участие на wild карти.</li>
                    <li><strong>Wild-only</strong> – само жокери и/или двойки.</li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>8. Какви са правилата за RUN?</summary>
                <div class="acc-content">
                  <ul class="text-secondary">
                    <li>Само от <strong>една боя</strong>.</li>
                    <li>Без jokers и двойки (2).</li>
                    <li>3 <strong>не участва</strong>.</li>
                    <li>Позволени стойности: <strong>4 → A</strong> (A както след K).</li>
                    <li>Посоката (UP/DOWN) се определя в началото и <strong>не се сменя</strong>.</li>
                    <li>Добавяне – <strong>само в края</strong>.</li>
                    <li><strong>9 не може</strong> да е начало или край на завършена канаста (7 карти).</li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi би-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>9. Как се затваря раздаването?</summary>
                <div class="acc-content">
                  <p class="text-secondary">
                    Раздаването приключва, когато играчът завърши хода си с discard и няма други карти в ръката.
                  </p>
                  <h5 class="mt-2 mb-2 fw-semibold">Затваряне „на плюс"</h5>
                  <ul class="text-secondary">
                    <li>Отборът има поне една канаста.</li>
                    <li>+100 бонус.</li>
                  </ul>
                  <h5 class="mt-2 mb-2 fw-semibold">Затваряне „на минус"</h5>
                  <ul class="text-secondary">
                    <li>Отваряне и затваряне в един ход <strong>без канаста</strong>.</li>
                    <li>Всички meld точки се броят на минус.</li>
                    <li>+100 бонус.</li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>

              <details class="acc mt-3">
                <summary>10. Какви UI индикатори трябва да видя?</summary>
                <div class="acc-content">
                  <ul class="text-secondary">
                    <li>OPENING_THRESHOLD за отбора.</li>
                    <li>Точки в текущия ход (напр. 115 / 120).</li>
                    <li>Статус: „ЗАТВОРЕНО", „ГОТОВ ЗА ОТВАРЯНЕ", „ОТВОРЕНО".</li>
                    <li>Бутон <strong>Undo</strong> (преди discard).</li>
                  </ul>
                  <a href="#top" class="back-to-top btn btn-sm btn-outline-secondary mt-3">
                    <i class="bi bi-arrow-up"></i> Към началото
                  </a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="py-4 mt-5 border-top">
      <div class="container text-center text-secondary">
        © 2026 Canastify – Българска канаста
      </div>
    </footer>
  `;

  // Initialize tabs
  initTabs(mainEl);
}

function initTabs(rootEl) {
  const buttons = rootEl.querySelectorAll('.tab-button');
  const panels = rootEl.querySelectorAll('.tab-panel');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;

      // Remove active class from all buttons and panels
      buttons.forEach((b) => b.classList.remove('is-active'));
      panels.forEach((p) => p.classList.remove('is-active'));

      // Add active class to clicked button and corresponding panel
      btn.classList.add('is-active');
      rootEl.querySelector(`[data-tab-panel="${tabName}"]`).classList.add('is-active');
    });
  });

  // Initialize accordion back-to-top buttons
  const backToTopButtons = rootEl.querySelectorAll('.back-to-top');
  backToTopButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}
