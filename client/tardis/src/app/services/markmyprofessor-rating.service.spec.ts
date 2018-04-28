import {async, inject, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FacultyService} from './faculty.service';
import {MarkmyprofessorRatingService} from './markmyprofessor-rating.service';

describe('MarkmyprofessorRatingService', () => {

  const professorName = 'Kovács Sándor';
  let mmpService: MarkmyprofessorRatingService;
  let facultyService: FacultyService;

  // tslint:disable-next-line:max-line-length
  const exampleResponse = `<table class="resultTable"><thead><tr class="order"><th width="" colspan="4" class="asc"><a href="/kereses.html?order=-name&amp;p=&amp;word=kovács_sándor&amp;type=professors" class="ajaxLink" rel="professorsDiv">Név</a></th><th width="50" ><a href="/kereses.html?order=-overallQuality&amp;p=&amp;word=kovács_sándor&amp;type=professors" class="ajaxLink" rel="professorsDiv">Átlag</a></th><th width="70" ><a href="/kereses.html?order=-school&amp;p=&amp;word=kovács_sándor&amp;type=professors" class="ajaxLink" rel="professorsDiv">Iskola</a></th><th width="110" ><a href="/kereses.html?order=-achievableAverage&amp;p=&amp;word=kovács_sándor&amp;type=professors" class="ajaxLink" rel="professorsDiv">Követelmények teljesíthetősége</a></th><th width="40" class=""><a href="/kereses.html?order=-sexy&amp;p=&amp;word=kovács_sándor&amp;type=professors" class="ajaxLink" rel="professorsDiv">Szexi</a></th><th width="40" >&nbsp;</th></tr></thead><tbody class="results"><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">1.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/1989122.html">Dr. Kovács Sándor</a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-evil.png" alt=""/></td><td align="center"><strong>1.70</strong></td><td align="right"><a href="/iskola/adatlap/28.html" class="infotool" name="Budapesti Műszaki és Gazdaságtudományi Egyetem Természettudományi Kar">BME-TTK</a></td><td align="center"><strong>1.70</strong></td><td align="center" valign="middle"></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/1989122.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">2.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/13335.html">Dr. Kovács Sándor</a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-normal.png" alt=""/></td><td align="center"><strong>3.66</strong></td><td align="right"><a href="/iskola/adatlap/100.html" class="infotool" name="Nyíregyházi Főiskola Gazdasági- és Társadalomtudományi Főiskolai Kar">NYF-GTK</a></td><td align="center"><strong>4.00</strong></td><td align="center" valign="middle"></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/13335.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">3.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/22301.html">Dr. Kovács Sándor</a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-normal.png" alt=""/></td><td align="center"><strong>2.53</strong></td><td align="right"><a href="/iskola/adatlap/53.html" class="infotool" name="Eötvös Loránd Tudományegyetem Informatikai Kar">ELTE-IK</a></td><td align="center"><strong>2.76</strong></td><td align="center" valign="middle"></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/22301.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">4.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/15154.html">Dr. Kovács Sándor        </a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-normal.png" alt=""/></td><td align="center"><strong>2.66</strong></td><td align="right"><a href="/iskola/adatlap/124.html" class="infotool" name="Pannon Egyetem Műszaki Informatikai Kar">PE-MIK</a></td><td align="center"><strong>3.00</strong></td><td align="center" valign="middle"><img src="/images/sexy-middle.png" alt=""/></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/15154.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">5.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/12090.html">Dr. Kovács Sándor</a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-angel.png" alt=""/></td><td align="center"><strong>4.83</strong></td><td align="right"><a href="/iskola/adatlap/89.html" class="infotool" name="Miskolci Egyetem Bölcsészettudományi Kar">ME-BTK</a></td><td align="center"><strong>5.00</strong></td><td align="center" valign="middle"></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/12090.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">6.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/19332.html"> Kovács Sándor</a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-normal.png" alt=""/></td><td align="center"><strong>0.00</strong></td><td align="right"><a href="/iskola/adatlap/160.html" class="infotool" name="Szegedi Tudományegyetem Bölcsészettudományi Kar">SZTE-BTK</a></td><td align="center"><strong>0.00</strong></td><td align="center" valign="middle"></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/19332.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr><tr class="values"><td align="right" valign="middle" width="20" ><span class="big-font4 capital">7.</span></td><td align="center" valign="middle" width="35"><img src="/images/icon-picview.png" alt=""/></td><td align="left" valign="middle"><a href="/tanar/adatlap/11654.html"> Kovács Sándor</a></td><td align="center" valign="middle" width="40"><img src="/images/list-prof-angel.png" alt=""/></td><td align="center"><strong>5.00</strong></td><td align="right"><a href="/iskola/adatlap/84.html" class="infotool" name="Liszt Ferenc Zeneművészeti Egyetem">LFZE</a></td><td align="center"><strong>5.00</strong></td><td align="center" valign="middle"><img src="/images/sexy-middle.png" alt=""/></td><td><a href="/oldalajanlo.html?referer=/tanar/adatlap/11654.html" class="infotool" name="Ajánlom" ><img src="/images/list-mailto.png" alt=""/></a></td></tr></tbody></table><div class="noresults"><table><tr><td width="90">&nbsp;</td><td align="left"><p>Ha nem találod a tanárod akit keresel, akkor regisztráld be TE!</p></td><td width="240" align="left"><div class="autowidth"><a class="btn" href="/tanar/feltoltes.html">Új&nbsp;&nbsp;tanár</a></div></td></tr></table></div><div class="pager"><div><span class="inactive-prewlink">vissza</span><span class="active">1</span><a href="/kereses.html?type=professors&p=2&ajax=&word=kovács_sándor&type=professors" class="pagerLink ajaxLink" rel="professorsDiv">2</a><a href="/kereses.html?type=professors&p=3&ajax=&word=kovács_sándor&type=professors" class="pagerLink ajaxLink" rel="professorsDiv">3</a><a href="/kereses.html?type=professors&p=2&ajax=&word=kovács_sándor&type=professors" class="nextlink ajaxLink" rel="professorsDiv">tovább</a></div></div><script type='text/javascript'>$('.ajaxLink').click(function (){var target=this.rel==false ? 'dialog' : this.rel;ajaxGetUpdate (target, this.href + (this.href.indexOf('?')==-1 ? '?' : '&') + 'ajax=true', true);return false;});</script>`;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        MarkmyprofessorRatingService,
        FacultyService,
      ],
    });
    mmpService = TestBed.get(MarkmyprofessorRatingService);
    facultyService = TestBed.get(FacultyService);
    facultyService.selectFaculty('IK');
  });

  it('should be created', () => {
    expect(mmpService).toBeTruthy();
  });

  it('should return true if exists', () => {
    (mmpService as any).professors.push({name: professorName, rating: 4.0, faculty: 'ELTE-IK'});
    expect(mmpService.exists(professorName)).toBeTruthy();
  });

  it('should return false if not exists', () => {
    expect(mmpService.exists(professorName)).toBeFalsy();
  });

  it('should filter professors below rating', () => {
    (mmpService as any).professors.push({name: professorName, rating: 4.0, faculty: 'ELTE-IK'});
    expect(mmpService.filterProfessors(4.5)).toEqual([]);
  });

  it('should filter professors above rating', () => {
    (mmpService as any).professors.push({name: professorName, rating: 4.0, faculty: 'ELTE-IK'});
    expect(mmpService.filterProfessors(4.0)).toBeTruthy();
  });

  it('should update professors', async(inject([HttpTestingController], (httpMock) => {
    mmpService.getRatingFor(professorName);
    httpMock.expectOne((req) => req.method === 'GET' && req.url.includes('mark-my-professor.php'))
      .flush(exampleResponse, {headers: {'Content-Type': 'text/html'}});
    expect(mmpService.exists(professorName)).toBeTruthy();
  })));

});
