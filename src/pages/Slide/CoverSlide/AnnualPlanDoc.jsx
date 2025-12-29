import React, { useEffect } from "react";
import { fullAnnualPlanData } from "./fullAnnualPlanData";
import styles from "./AnnualPlanDoc.module.css";

const FinancialBox = ({ income, expense, profit, details, title }) => {
  return (
    <div className={styles.financialBox}>
      {title && <h4 className={styles.financialTitle}>{title}</h4>}
      {details && (
        <div className={styles.financialDetails}>
          {Array.isArray(details) ? (
            details.map((line, i) => <div key={i}>{line}</div>)
          ) : (
            <div>{details}</div>
          )}
        </div>
      )}
      <div className={styles.financialGrid}>
        {income && (
          <div className={`${styles.stat} ${styles.income}`}>
            <span>הכנסות:</span> {income}
          </div>
        )}
        {expense && (
          <div className={`${styles.stat} ${styles.expense}`}>
            <span>הוצאות:</span> {expense}
          </div>
        )}
        {profit && (
          <div className={`${styles.stat} ${styles.profit}`}>
            <span>רווח:</span> <strong>{profit}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

const ListSection = ({ items, title }) => {
  if (!items) return null;
  return (
    <div className={styles.listSection}>
      {title && <h5>{title}</h5>}
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default function AnnualPlanDoc({ targetSectionId }) {
  const { metadata, sections } = fullAnnualPlanData;

  // מנגנון הגלילה האוטומטי
  useEffect(() => {
    if (targetSectionId) {
      const elementId = `doc-section-${targetSectionId}`;
      // חיפוש האלמנט הספציפי
      const element = document.getElementById(elementId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // דיליי קטן לוודא שהמודל נפתח
      } else {
        console.warn(`Element with id ${elementId} not found`);
      }
    }
  }, [targetSectionId]);

  const renderSectionContent = (section) => {
    switch (section.id) {
      case "1": // חזון
        return (
          <div className={styles.visionSection}>
            <div className={styles.visionBlock}>
              <h3>{section.content.vision.title}</h3>
              {section.content.vision.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className={styles.goalBlock}>
              <h3>{section.content.primaryGoal.title}</h3>
              <ul>
                {section.content.primaryGoal.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "2": // מוצרים
        return (
          <div className={styles.productsGrid}>
            {section.items.map((item, i) => (
              <div key={i} className={styles.productCard}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        );

      case "3": // לקוחות
        return (
          <div className={styles.customersContainer}>
            {section.categories.map((cat, i) => (
              <div key={i} className={styles.customerCategory}>
                <h4>{cat.type}</h4>
                {cat.details && <p>{cat.details}</p>}
                <ListSection title={cat.subListTitle} items={cat.subList} />
                <ListSection
                  title={cat.existingListTitle}
                  items={cat.existingList}
                />
                <ListSection title={cat.examplesTitle} items={cat.examples} />
              </div>
            ))}
          </div>
        );

      case "4": // SWOT
        return (
          <div className={styles.swotGrid}>
            <div className={`${styles.swotCard} ${styles.strengths}`}>
              <h4>חוזקות (Strengths)</h4>
              <ListSection items={section.matrix.strengths} />
            </div>
            <div className={`${styles.swotCard} ${styles.weaknesses}`}>
              <h4>חולשות (Weaknesses)</h4>
              <ListSection items={section.matrix.weaknesses} />
            </div>
            <div className={`${styles.swotCard} ${styles.opportunities}`}>
              <h4>הזדמנויות (Opportunities)</h4>
              <ListSection items={section.matrix.opportunities} />
            </div>
            <div className={`${styles.swotCard} ${styles.threats}`}>
              <h4>איומים (Threats)</h4>
              <ListSection items={section.matrix.threats} />
            </div>
          </div>
        );

      case "5": // שיווק ומכירות
        return (
          <div>
            <div className={styles.marketingMain}>
              <h4>{section.marketingMain.title}</h4>
              <ListSection items={section.marketingMain.points} />
            </div>
            {section.subSections.map((sub, i) => (
              <div
                key={i}
                className={styles.subSection}
                // === תיקון קריטי: הוספת ID לתתי-סעיפים (כמו 5.1) ===
                id={`doc-section-${sub.id}`}
              >
                <h4>{sub.title}</h4>
                {sub.forecast && (
                  <p className={styles.highlightText}>{sub.forecast}</p>
                )}
                {sub.strategy && (
                  <p>
                    <strong>אסטרטגיה:</strong> {sub.strategy}
                  </p>
                )}

                {sub.breakdown?.map((b, idx) => (
                  <FinancialBox
                    key={idx}
                    title={b.holiday}
                    details={b.calculation}
                    profit={b.profit}
                  />
                ))}

                {sub.profitability && (
                  <FinancialBox
                    title={sub.profitability.title}
                    details={sub.profitability.calc}
                    profit={sub.profitability.profit}
                  />
                )}
              </div>
            ))}
          </div>
        );

      case "6": // דפוס
        return (
          <div>
            <p className={styles.introText}>{section.intro}</p>
            {section.subSections.map((sub, i) => (
              <div
                key={i}
                className={styles.subSection}
                // === הוספת ID לתתי-סעיפים ===
                id={`doc-section-${sub.id}`}
              >
                <h4>{sub.title}</h4>
                {sub.description && <p>{sub.description}</p>}
                {sub.suppliers && (
                  <p className={styles.badge}>{sub.suppliers}</p>
                )}
                {sub.productsList && (
                  <ListSection
                    title={sub.productsList.title}
                    items={sub.productsList.items}
                  />
                )}
                <ListSection items={sub.examples} />
                <ListSection items={sub.forecast} />
                <ListSection items={sub.annualForecast} />
                <ListSection items={sub.monthlyForecast} />
              </div>
            ))}
          </div>
        );

      case "7": // מנועי צמיחה
        return (
          <div className={styles.projectsContainer}>
            <p className={styles.note}>{section.note}</p>
            {section.projects.map((proj, i) => (
              <div
                key={i}
                className={styles.projectCard}
                // === הוספת ID לתתי-סעיפים ===
                id={`doc-section-${proj.id}`}
              >
                <h3 className={styles.projectTitle}>{proj.title}</h3>

                {/* תוכן הפרויקטים */}
                {proj.concept && (
                  <p>
                    <strong>הקונספט:</strong> {proj.concept}
                  </p>
                )}
                {proj.description && <p>{proj.description}</p>}
                {proj.uniqueness && (
                  <p>
                    <strong>ייחודיות:</strong> {proj.uniqueness}
                  </p>
                )}

                {/* טיפול ב-SubTypes (הרצאות וסיורים) */}
                {proj.subTypes && (
                  <div className={styles.subTypesContainer}>
                    {proj.subTypes.map((sub, subIdx) => (
                      <div key={subIdx} className={styles.subTypeBlock}>
                        <h4 className={styles.subTypeTitle}>{sub.type}</h4>
                        {sub.description && <p>{sub.description}</p>}

                        {/* פרמטרים נוספים... */}
                        {sub.structure && (
                          <p>
                            <strong>מבנה:</strong> {sub.structure}
                          </p>
                        )}
                        {sub.content && (
                          <p>
                            <strong>תוכן:</strong> {sub.content}
                          </p>
                        )}
                        {sub.exampleDeal && (
                          <FinancialBox
                            title={sub.exampleDeal.title}
                            details={[
                              sub.exampleDeal.description,
                              ...(sub.exampleDeal.pricing || []),
                              ...(sub.exampleDeal.calc || []),
                            ].filter(Boolean)}
                            profit={sub.exampleDeal.profit}
                          />
                        )}
                        {sub.annualForecast && (
                          <FinancialBox
                            title={sub.annualForecast.title}
                            details={[
                              sub.annualForecast.note,
                              ...(sub.annualForecast.calc || []),
                            ].filter(Boolean)}
                            profit={sub.annualForecast.profit}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* המשך רגיל */}
                {proj.exampleCase && (
                  <div className={styles.caseStudy}>
                    <h5>{proj.exampleCase.title}</h5>
                    <ListSection items={proj.exampleCase.steps} />
                  </div>
                )}
                {proj.exampleDeal && (
                  <FinancialBox
                    title={proj.exampleDeal.title}
                    details={
                      proj.exampleDeal.description
                        ? [
                            proj.exampleDeal.description,
                            ...(proj.exampleDeal.pricing || []),
                            ...(proj.exampleDeal.calc || []),
                          ]
                        : proj.exampleDeal.calc
                    }
                    profit={proj.exampleDeal.profit}
                  />
                )}
                {proj.annualForecast && (
                  <FinancialBox
                    title={proj.annualForecast.title}
                    details={proj.annualForecast.calc}
                    profit={proj.annualForecast.profit}
                  />
                )}
              </div>
            ))}
          </div>
        );

      case "8": // משאבים
        return (
          <div className={styles.resourcesSection}>
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );

      default:
        return <p>תוכן לא זמין עבור סעיף זה.</p>;
    }
  };

  return (
    <div className={styles.docContainer}>
      <header className={styles.docHeader}>
        <h1>{metadata.title}</h1>
        <span className={styles.docTag}>מסמך אסטרטגי</span>
      </header>

      <div className={styles.docContent}>
        {sections.map((section) => (
          <section
            key={section.id}
            // ID לפרק הראשי
            id={`doc-section-${section.id}`}
            className={styles.docSection}
          >
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionBody}>
              {renderSectionContent(section)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
