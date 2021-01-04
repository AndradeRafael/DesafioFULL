using System.Threading.Tasks;
using DesafioFULL_WebAPI.Models;

namespace DesafioFULL_WebAPI.Data
{
    public interface IRepository
    {
        //GENERAL
            void Add<T>(T entity) where T : class;
            void Update<T>(T entity) where T : class;
            void Delete<T>(T entity) where T : class;
            Task<bool> SaveChangesAsync();

            //TITLE
            Task<Title[]> GetAllTitlesAsync();        
            Task<Title> GetTitleByIdAsync(int titleId);

            //QUOTA
            Task<Quota[]> GetQuotasByTitleIdAsync(int titleId);

            //OBLIGATORS
            Task<Obligator> GetObligatorByTitleIdAsync(int titleId);
    }
}